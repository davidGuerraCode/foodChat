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
      iconClass: 'fas fa-envelope'
    },
    {
      placeholder: 'Password',
      type: 'password',
      name: 'password',
      iconClass: 'fas fa-lock'
    },
    {
      placeholder: 'Confirm password',
      type: 'password',
      name: 'confirm password',
      iconClass: 'fas fa-lock'
    }
  ]);

  const inputs = input.map((el, index) => {
    return (
      <div key={index} className={style.InputContainer}>
        <input type={el.type} name={el.name} placeholder={el.placeholder} />
        <span className={style.IconContainer}>
          <i className={el.iconClass} />
        </span>
      </div>
    );
  });

  return (
    <Aux>
      <div className={style['Container-bg']}>
        <div className={style['bg']} />
      </div>
      <div className={style['Container']}>
        <Card>
          <div className={style.CardTitle}>
            <p>SIGN UP</p>
            <svg height="3" width="50">
              <line x1="15" y1="0" x2="30" y2="0" />
            </svg>
          </div>
          <div className={style.FormContainer}>
            <form className={style.Form}>
              {inputs}
              <button>Get Started</button>
              <p className={style.ChangeSignin}>
                Have an account? <span className={style.Link}>Sign In.</span>
              </p>
            </form>
          </div>
        </Card>
      </div>
    </Aux>
  );
};

export default signup;
