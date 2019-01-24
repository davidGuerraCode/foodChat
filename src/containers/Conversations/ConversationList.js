import React, { Component } from 'react';

import style from './ConversationList.module.css';
import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import Conversation from '../../components/Conversation/Conversation';
import Tabs from '../../components/Tabs/Tabs';

class ConversationList extends Component {
    componentDidMount() {
        console.log(this.props);
        // Get the conversations list
    }

    state = {
        conversations: [
            {
                id: 1,
                username: 'Burger Pug',
                avatarImg:
                    'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80',
                initDate: '19/10/2019',
                lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos!'
            },
            {
                id: 2,
                username: 'Burger Shark',
                avatarImg:
                    'http://sharkdivingxperts.com/wp-content/uploads/2015/05/great-white-sharks-in-guadalupe.jpg',
                initDate: '19/10/2019',
                lastMessage:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos! Consequatur, eos!'
            }
        ]
    };

    render() {
        const { conversations } = this.state;
        const conversation = conversations.map(item => {
            return <Conversation key={item.id} conversation={item} />;
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
