import React from 'react';
import style from './InputBox.module.css';

const ChatInput = props => {
    const { handleKeydownEvent } = props;
    return (
        <div className={style['chat-input']}>
            <div
                aria-label="Escribe un mensaje..."
                contentEditable="true"
                spellCheck="true"
                placeholder="Escribe un mensaje"
                className={style['message-box']}
                onKeyUp={handleKeydownEvent}
                data-js="chat-input"
            />
            <div className={style['media-icons']}>
                <span className={style['attach-icon']}>
                    <i className="fas fa-paperclip" />
                </span>
                <span className={style['camera-icon']}>
                    <i className="fas fa-camera" />
                </span>
            </div>
        </div>
    );
};

export default ChatInput;
