import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import ConversationList from './Conversations/ConversationList';
import ChatRoom from '../containers/ChatRoom/ChatRoom';
import Auth from '../containers/Auth/Auth';
import Contacts from '../components/Contacts/Contacts';
import RolSelect from '../components/RolSelect/RolSelect';
import Signup from '../components/Signup/Signup';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/chat-room/:id" component={ChatRoom} />
            <Route path="/conversation-list" component={ConversationList} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/auth" component={Auth} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={RolSelect} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
