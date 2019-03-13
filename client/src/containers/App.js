import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import ConversationList from './Conversations/ConversationList';
import ChatRoom from '../containers/ChatRoom/ChatRoom';
import Auth from '../containers/Auth/Auth';
import Contacts from '../components/Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/chat-room/:id" component={ChatRoom} />
            <Route path="/conversation-list" component={ConversationList} />
            <Route path="/contacts" component={Contacts} />
            <Route exact path="/" component={Auth} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
