import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
// import style from './ChatRoom.module.css';
import Header from '../../components/Header/Header';
import UserData from '../../components/UserData/UserData';
// import ChatMessageList from '../../components/ChatMessageList/ChatMessageList';
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

    render() {
        return (
            <Aux>
                <Header route={this.props}>
                    <UserData userData={this.state.user} />
                </Header>
                {/* <ChatMessageList /> */}
                <InputBox />
            </Aux>
        );
    }
}

export default ChatRoom;
