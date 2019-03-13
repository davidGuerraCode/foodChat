import React, { Component } from 'react';
import style from './InputBox.module.css';
import Aux from '../../hoc/Aux/Aux';

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleEvent = event => {
    const ENTER_KEY = 13;
    const value = event.target.textContent;

    if (event.keyCode === ENTER_KEY && !event.shiftKey) {
      event.preventDefault();

      this.setState(prevState => (prevState.message = value));
      console.log('Before setState', value);
      event.target.textContent = '';
      event.target.scrollTop = event.target.scrollHeight;
      this.sendMessage(value);
    }
  };

  sendMessage = message => {
    this.props.sendMessage(message);
    this.setState({ message: '' });
  };

  render() {
    const { isTyping } = this.props;
    return (
      <Aux>
        <div className={style['chat-input']}>
          <div
            aria-label="Escribe un mensaje..."
            contentEditable="true"
            spellCheck="true"
            placeholder="Escribe un mensaje"
            className={style['message-box']}
            onKeyDown={this.handleEvent}
            onInput={isTyping}
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
        {/* <div className={style['send-icon']}>Send</div> */}
      </Aux>
    );
  }
}

export default ChatInput;
