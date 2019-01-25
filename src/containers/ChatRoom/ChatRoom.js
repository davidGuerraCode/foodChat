import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import style from './ChatRoom.module.css';
import Header from '../../components/Header/Header';
import ChatMessageList from '../../components/ChatMessageList/ChatMessageList';
import UserData from '../../components/UserData/UserData';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 1,
                username: 'Burger Pug',
                avatarImg:
                    'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80',
                initDate: '19/10/2019'
            },
            messages: ['']
        };
    }

    componentDidMount() {
        // Get the user info and messages for the user (id) from DB
        const {
            match: { params }
        } = this.props;
        // set new state
    }

    render() {
        return (
            <Aux>
                <Header route={this.props}>
                    <UserData userData={this.state.user} />
                </Header>
                {/* <ChatMessageList /> */}
            </Aux>
        );
    }
}

export default ChatRoom;
