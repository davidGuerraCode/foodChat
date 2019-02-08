const uuidv4 = require('uuid/v4');

// Model to insert data on DB.

const createUser = ({ name = '', id = null } = {}) => {
  return {
    id,
    name
  };
};

const createMessage = ({ message } = '', sentBy = '', id) => {
  return {
    id,
    time: getFormatTime(new Date(Date.now())),
    message,
    sentBy
  };
};

const createNewConversation = ({ messages = [], name = 'Evento', users = [] } = {}) => {
  return {
    id: uuidv4(),
    messages,
    name,
    users,
    typingUsers: []
  };
};

const getFormatTime = date => {
  return `${date.getHours()} : ${'0' + date.getMinutes().slice(-2)}`;
};

module.exports = {
  createUser,
  createMessage,
  createNewConversation
};
