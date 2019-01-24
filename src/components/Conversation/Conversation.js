import React from 'react';
import style from './Conversation.module.css';

const Conversation = props => {
    const { username, avatarImg, lastMessage } = props.conversation;

    return (
        <div className={style['info']}>
            <img className={style['avatar-img']} src={avatarImg} alt="Avatar" />
            <div className={style['user-info-box']}>
                <p className={style['username']}>{username}</p>
                <p className={style['message']}>{lastMessage}</p>
            </div>
        </div>
    );
};

export default Conversation;
