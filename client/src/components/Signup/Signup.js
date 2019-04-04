import React, { useState } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Card from '../UI/Card/Card';
import style from '../Signup/Signup.module.css';

const signup = props => {
  const [input, setInput] = useState([
    {
      placeholder: 'Fullname',
      type: 'text',
      name: 'fullname',
      iconClass: 'fas fa-user'
    },
    {
      placeholder: 'Email',
      type: 'email',
      name: 'email',
      iconClass: 'fas fa-user'
    },
    {
      placeholder: 'Password',
      type: 'password',
      name: 'password',
      iconClass: 'fas fa-user'
    }
  ]);

  const inputs = input.map((el, index) => {
    return <input type={el.type} name={el.name} placeholder={el.placeholder} />;
  });

  return (
    <Aux>
      <div className={style['Container-bg']}>
        <div className={style['bg']} />
      </div>
      <div className={style['Container']}>
        <Card>
          <div className={style['Form-container']}>
            <form>{inputs}</form>
          </div>
        </Card>
      </div>
    </Aux>
  );
};

export default signup;
