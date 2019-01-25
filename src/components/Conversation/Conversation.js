import React, { Component } from 'react';
import style from './Conversation.module.css';

class Conversation extends Component {
    goToChatRoom = event => {
        const { id } = this.props.conversation;
        const { history } = this.props.route;

        history.push(`chat-room/${id}`);
    };

    render() {
        const { username, avatarImg, lastMessage, id } = this.props.conversation;

        return (
            <div className={style['info']} onClick={this.goToChatRoom}>
                <img className={style['avatar-img']} src={avatarImg} alt="Avatar" />
                <div className={style['user-info-box']}>
                    <p className={style['username']}>{username}</p>
                    <p className={style['message']}>{lastMessage}</p>
                </div>
            </div>
        );
    }
}

export default Conversation;
