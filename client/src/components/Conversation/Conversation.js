import React, { Component } from 'react';
import style from './Conversation.module.css';
import socket from '../../socket';
// import { VERIFY_USER, USER_CONNECTED } from '../../../../Events';

class Conversation extends Component {
  initChatRoom = () => {
    const { username, id } = this.props.conversation;
    const { history } = this.props.route;
    history.push(`chat-room/${id}`);
    let payload = {
      id,
      name: username.trim()
    };

    socket.emit('VERIFY_USER', payload, this.setUser);
  };

  setUser = ({ user, isUser }) => {
    if (isUser) {
      console.log('[!] User exist');
    } else {
      console.log('[!] Set the user to the state', user);
      this.connectUser(user);
    }
  };

  connectUser = user => {
    socket.emit('USER_CONNECTED', user);
    console.log('[Change the state]', user);
  };

  render() {
    const { username, avatar_url, lastMessage } = this.props.conversation;

    return (
      <div className={style['info']} onClick={this.initChatRoom}>
        <img className={style['avatar-img']} src={avatar_url} alt="Avatar" />
        <div className={style['user-info-box']}>
          <p className={style['username']}>{username}</p>
          <p className={style['message']}>{lastMessage}</p>
        </div>
      </div>
    );
  }
}

export default Conversation;
