import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Signin from '../../components/Signin/Signin';

const auth = props => {
  return (
    <Aux>
      <Signin route={props} />
    </Aux>
  );
};

export default auth;
