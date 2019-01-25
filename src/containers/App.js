import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import ConversationList from './Conversations/ConversationList';
import ChatRoom from '../containers/ChatRoom/ChatRoom';

class App extends Component {
    /* state = {
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
    }; */

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
            <div>
                <Layout>
                    <Switch>
                        <Route path="/chat-room/:id" component={ChatRoom} />
                        <Route path="/" component={ConversationList} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
