import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
// import style from './ChatRoom.module.css';
import Header from '../../components/Header/Header';
import UserData from '../../components/UserData/UserData';
import MessageList from '../../components/MessageList/MessageList';
import InputBox from '../../components/InputBox/InputBox';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }

    componentDidMount() {
        console.log('[componentDidMount Hook]');
        const {
            match: {
                params: { id }
            }
        } = this.props;

        axios.get(`http://localhost:5000/users/${id}`).then(res => {
            console.log(`[!] Returning from Api on chatRoom component ${JSON.stringify(res.data)}`);
            const user = res.data;
            this.setState({ user });
        });
    }

    handleKeydownEvent = event => {
        const value = event.target.textContent;
        const ENTER = 13;

        if (event.keyCode === ENTER) {
            event.preventDefault();
            console.log('[Send message and append to the chatListBox]', value);
            event.target.textContent = '';
        }
    };

    render() {
        return (
            <Aux>
                <Header route={this.props}>
                    <UserData userData={this.state.user} />
                </Header>
                {/* <MessageList /> */}
                <InputBox handleKeydownEvent={this.handleKeydownEvent} />
            </Aux>
        );
    }
}

export default ChatRoom;
