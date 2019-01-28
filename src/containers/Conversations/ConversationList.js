import React, { Component } from 'react';
import axios from 'axios';

import style from './ConversationList.module.css';
import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import Conversation from '../../components/Conversation/Conversation';
import Tabs from '../../components/Tabs/Tabs';

class ConversationList extends Component {
    state = {
        conversations: []
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/users`).then(res => {
            console.log(`[!] Returning from Api ${JSON.stringify(res.data)}`);
            const conversations = res.data;
            this.setState({ conversations });
        });
    }

    render() {
        const { conversations } = this.state;
        const conversation = conversations.map(item => {
            return <Conversation key={item.id} conversation={item} route={this.props} />;
        });

        return (
            <Aux>
                <Header>
                    <div className={style['brand-name']}>
                        <p>FoodTruckMap</p>
                        {/* Component to list tabs */}
                    </div>
                </Header>
                <Tabs />
                {conversation}
            </Aux>
        );
    }
}

export default ConversationList;
