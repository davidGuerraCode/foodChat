import React, { Component } from 'react';
import './App.css';

import ChatHeader from '../components/ChatHeader/ChatHeader';
import ChatMessageList from '../components/ChatMessageList/ChatMessageList';
import ChatInput from '../components/ChatInput/ChatInput';

class App extends Component {
    state = {
        user: {
            id: 1,
            username: 'David',
            avatar: 'ImageInfo',
            status: 'Disponible'
        },
        messages: [
            { id: 1, username: 'David', message: 'Hola mundo, Chat' },
            { id: 2, username: 'Daniel', message: 'Respuesta hola mundo, Chat' },
            { id: 3, username: 'Hector', message: 'Algo más hola mundo, Chat' }
        ]
    };

    handleInput = event => {
        /* const value = event.target.textContent;
        const parentDiv = document.querySelector('[data-js="chat-input"]');
        if (!value) {
            const placeholderDiv = document.createElement('div');
            const content = document.createTextNode('Escribe un mensaje...');

            placeholderDiv.appendChild(content);
            placeholderDiv.setAttribute('data-js', 'placeholder');

            document.body.insertBefore(placeholderDiv, parentDiv);
        } else {
            const placeholder = document.querySelector('[data-js="placeholder"]');
            console.log(placeholder);
            placeholder.parentNode.removeChild(placeholder);
        } */
    };

    render() {
        return (
            <div className="App">
                <ChatHeader userData={this.state.user} />
                <ChatMessageList messages={this.state.messages} />
                <ChatInput handleInput={this.handleInput} />
            </div>
        );
    }
}

export default App;
