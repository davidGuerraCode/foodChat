import React from 'react';
import style from './MessageList.module.css';

import Message from '../Message/Message';

const MessageList = props => {
    const messages = props.messages.map((person, index) => {
        return <Message key={person.id} message={person.message} />;
    });

    return <div className={style['chat-container']}>{messages}</div>;
};

export default MessageList;
