import React from 'react';
import style from './MessageList.module.css';

import Message from '../Message/Message';

const MessageList = props => {
  let message;
  const { messages, children } = props;
  if (messages.length === 0) {
    return <div>No message yet</div>;
  } else {
    message = messages.map(message => {
      return <Message key={message.userId} message={message.message} />;
    });
  }

  // return <div className={style['chat-container']}>{message}</div>;
  return (
    <div className={style['chat-container']}>
      <div className={style['thread-container']}>{message}</div>
      {children}
    </div>
  );
};

export default MessageList;
