import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import style from './ChatRoom.module.css';
import Header from '../../components/Header/Header';
import ChatMessageList from '../../components/ChatMessageList/ChatMessageList';
import UserData from '../../components/UserData/UserData';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }

    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        axios.get(`http://localhost:5000/users/${id}`).then(res => {
            console.log(`[!] Returning from Api ${JSON.stringify(res.data)}`);
            const user = res.data;
            this.setState({ user });
        });
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
