import React from 'react';
import style from './ChatMessageList.module.css';

import ChatMessage from '../ChatMessage/ChatMessage';

const chatMessageList = props => {
    const messages = props.messages.map((person, index) => {
        return <ChatMessage key={person.id} message={person.message} />;
    });

    return <div className={style['chat-container']}>{messages}</div>;
};

export default chatMessageList;
