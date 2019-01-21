import React from 'react';
import style from './ChatMessage.module.css';

const ChatMessage = props => (
    <div className={style['message-card']}>
        <p className={style['message']}>{props.message}</p>
    </div>
);

export default ChatMessage;
