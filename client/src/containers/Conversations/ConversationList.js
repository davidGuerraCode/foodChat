import React, { Component } from 'react';
import axios from 'axios';

import style from './ConversationList.module.css';
import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import Conversation from '../../components/Conversation/Conversation';
import { CONVERSATION_LIST, CONTACTS } from '../../Routes';
import Tabs from '../../components/Tabs/Tabs';

class ConversationList extends Component {
  state = {
    conversations: [],
    tabsList: [
      {
        name: 'Conversations',
        path: CONVERSATION_LIST,
        isCurrentPage: true
      },
      {
        name: 'Contacts',
        path: CONTACTS,
        isCurrentPage: false
      }
    ],
    isActive: false
  };

  componentDidMount() {
    const cookieAccessToken = document.cookie;
    const token = cookieAccessToken.split('token')[1].split('=')[1];

    axios
      .get(`http://localhost:5000/users`, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        try {
          console.log(`[!] Returning from Api ${JSON.stringify(res.data)}`);
          const conversations = res.data;
          this.setState({ conversations });
        } catch (error) {
          console.log('[Some went wrong]', error);
        }
      });
  }

  routeHandler = path => {
    const {
      match: { url },
      history
    } = this.props;

    if (url !== path) {
      history.push(path);
    }
  };

  render() {
    const { conversations } = this.state;
    const conversation = conversations.map(item => {
      return <Conversation key={item.id} conversation={item} route={this.props} />;
    });

    return (
      <Aux>
        <Header route={this.props}>
          <div className={style['brand-name']}>
            <p>FoodTruckMap</p>
            {/* Component to list tabs */}
          </div>
        </Header>
        <Tabs routeHandler={path => this.routeHandler(path)} tabs={this.state.tabsList} />
        {conversation}
      </Aux>
    );
  }
}

export default ConversationList;
