const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const socketIO = require('socket.io');
const io = socketIO(server);

const PORT = process.env.PORT || 4000;
const { VERIFY_USER, USER_CONNECTED, MESSAGE_SENT, MESSAGE_RECIEVED, EVENT_CHAT } = require('./Events');
const { createUser, createNewConversation, createMessage } = require('./lib/helpers/UserFactories');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(`${__dirname}/client/public`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

let connectedUsers = {};
let conversation = createNewConversation();

let sendMessageToChatFromUser;

// Create the connection to the socket
io.on('connection', socket => {
  console.log('[!] User connected');
  socket.on(VERIFY_USER, (userData, callback) => {
    console.log('Userdata', userData);
    if (!isUser(connectedUsers, userData.name)) {
      callback({ isUser: false, user: createUser({ name: userData.name, id: userData.id }) });
    } else {
      callback({ isUser: true });
    }
  });

  socket.on(USER_CONNECTED, user => {
    connectedUsers = addUser(connectedUsers, user);
    socket.user = user;

    sendMessageToChatFromUser = sendMessageToChat(user.name);
    io.emit(USER_CONNECTED, connectedUsers);
    console.log('[!] Users connected', connectedUsers);
  });

  socket.on(MESSAGE_SENT, ({ chatId, message }) => {
    sendMessageToChatFromUser(chatId, message);
  });

  socket.on(EVENT_CHAT, callback => {
    callback(conversation);
  });

  socket.on('typing', data => {
    socket.broadcast.emit('typing', data);
  });
});

function sendMessageToChat(sender) {
  return (chatId, message) => io.emit(`${MESSAGE_RECIEVED}-${chatId}`, createMessage({ message, sender }));
}

function isUser(userList, username) {
  return username in userList;
}

function addUser(userList, newUser) {
  let newUserList = Object.assign({}, userList);

  newUserList[newUser.name] = newUser;

  return newUserList;
}

function removeUser(userList, username) {
  let newUserList = Object.assign({}, userList);

  delete newUserList[username];

  return newUserList;
}

server.listen(PORT, () => console.log(`[+] Server running on port ${PORT}`));
