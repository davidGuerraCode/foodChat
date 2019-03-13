import React from 'react';
import style from './Message.module.css';

const Message = props => {
    return (
        <div className={style['message-container']}>
            <p className={style['message']}>{props.message}</p>
        </div>
    );
};

export default Message;
