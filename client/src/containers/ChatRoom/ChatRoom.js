import React, { Component } from 'react';
import axios from 'axios';
import socket from '../../socket';

import Aux from '../../hoc/Aux/Aux';
import style from './ChatRoom.module.css';
import Header from '../../components/Header/Header';
import UserData from '../../components/UserData/UserData';
import MessageList from '../../components/MessageList/MessageList';
import InputBox from '../../components/InputBox/InputBox';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      user: [],
      currentConversationId: null,
      activeChat: null,
      messages: [
        { userId: 1, message: 'Lorem ipsum' },
        { userId: 2, message: 'Lorem ipsum dolor' },
        { userId: 3, message: 'Lorem ipsum with' },
        { userId: 4, message: 'Lorem ipsum lorez' }
      ],
      isTyping: false,
      userTyping: ''
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios.get(`http://localhost:5000/users/${id}`).then(res => {
      // console.log(`[!] Returning from Api on chatRoom component ${JSON.stringify(res.data)}`);
      const user = res.data;
      this.setState({ user });
    });

    socket.emit('EVENT_CHAT', this.resetChat);

    /* socket.on('typing', ({ username, inputValue }) => {
      console.log('value', inputValue);

      if (inputValue.length < 1) {
        this.setState(prevState => (prevState.isTyping = false));
      } else {
        this.setState(prevState => (prevState.isTyping = true));
        this.setState(prevState => (prevState.userTyping = username));
      }
    }); */
  }

  resetChat = chat => {
    this.addChat(chat, true);
  };

  addChat = (chat, reset) => {
    console.log('ChatId', chat.id);
    const { chats } = this.state;
    const newChats = reset ? [chat] : [...chats, chat];
    const messageEvent = `${'MESSAGE_RECIEVED'}-${chat.id}`;

    this.setState({ chats: newChats, activeChat: reset ? chat : this.state.activeChat });

    socket.on(messageEvent, this.addMessageToChat(chat.id));
  };

  addMessageToChat = chatId => {
    console.log('[addMessageToChat]', chatId);
    return message => {
      const { chats } = this.state;
      let newChats = chats.map(chat => {
        if (chat.id === chatId) {
          chat.messages.push(message);
        }
        return chat;
      });
      this.setState({ chats: newChats });
    };
  };

  sendMessage = (chatId, message) => {
    console.log('Message recieved', message);
    socket.emit('MESSAGE_SENT', { chatId, message });
  };

  handleIsTypingEvent = ({ target: { textContent } }) => {
    console.log('[Val]', textContent);
    const payload = {
      username: this.state.user.username.trim(),
      inputValue: textContent
    };

    socket.emit('typing', payload);
  };

  render() {
    return (
      <Aux>
        <Header route={this.props}>
          <UserData userData={this.state.user} />
        </Header>
        <MessageList messages={this.state.messages}>
          {this.state.isTyping ? (
            <div className={style['is-typing']}>
              <p>
                <em>{this.state.userTyping} is typing...</em>
              </p>
            </div>
          ) : (
            ''
          )}
        </MessageList>
        <InputBox
          sendMessage={message => this.sendMessage(this.state.chats[0].id, message)}
          isTyping={this.handleIsTypingEvent}
        />
      </Aux>
    );
  }
}

export default ChatRoom;
