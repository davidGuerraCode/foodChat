import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import UserData from '../../components/UserData/UserData';

class Contacts extends Component {
  constructor(props) {
    super(props);
    // TODO: Get user from token
    this.state = {
      user: {
        username: 'dGuerra',
        avatar_url:
          'data:image/png;base64,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',
        status: 'On line'
      }
    };
  }
  render() {
    return (
      <Aux>
        <Header route={this.props}>
          <UserData userData={this.state.user} />
        </Header>
        <div> Contact Page</div>
      </Aux>
    );
  }
}

export default Contacts;
