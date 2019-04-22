import React, { useState } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Card from '../UI/Card/Card';
import Input from '../UI/Form/Input/Input';
import style from '../Signup/Signup.module.css';

const signup = props => {
  const [inputFactory, setInputFactory] = useState({
    fullname: {
      elementType: 'input',
      elementConfig: {
        placeholder: 'Fullname',
        type: 'text',
        name: 'fullname'
      },
      icon: 'fas fa-user',
      value: ''
    },
    email: {
      elementType: 'input',
      elementConfig: {
        placeholder: 'Email',
        type: 'email',
        name: 'email'
      },
      icon: 'fas fa-envelope',
      value: ''
    },
    password: {
      elementType: 'input',
      elementConfig: {
        placeholder: 'Password',
        type: 'password',
        name: 'password'
      },
      icon: 'fas fa-lock',
      value: ''
    },
    confirmPassword: {
      elementType: 'input',
      elementConfig: {
        placeholder: 'Confirm password',
        type: 'password',
        name: 'confirm password'
      },
      icon: 'fas fa-lock',
      value: ''
    }
  });

  const formElementsArray = [];

  for (const key in inputFactory) {
    if (inputFactory.hasOwnProperty(key)) {
      formElementsArray.push({
        id: key,
        config: inputFactory[key]
      });
    }
  }

  const inputs = formElementsArray.map(el => {
    return (
      <div key={el.id}>
        <Input
          elementType={el.config.elementType}
          elementConfig={el.config.elementConfig}
          value={el.config.value}
          icon={el.config.icon}
        />
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
