import React, { useState } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Card from '../UI/Card/Card';
import style from './RolSelect.module.css';
import { SIGNIN, SIGNUP } from '../../Routes';

const rolSelect = props => {
  const { history } = props;
  const [roles, setRoles] = useState([
    {
      rol: 'user',
      iconUrl: 'user.svg',
      path: SIGNUP
    },
    {
      rol: 'owner',
      iconUrl: 'owner.svg',
      path: SIGNIN
    }
  ]);
  const rolSelection = roles.map((rol, index) => {
    return (
      <Card label={rol.rol} grow={true} key={index}>
        <img
          src={rol.iconUrl}
          alt={rol.rol + '-icon'}
          onClick={event => history.push(rol.path)}
        />
      </Card>
    );
  });

  return (
    <Aux>
      <div className={style['container']}>
        <div className={style['rol-container']}>
          <h1>Choose your rol:</h1>
          <div className={style['card-container']}>{rolSelection}</div>
        </div>
      </div>
    </Aux>
  );
};

export default rolSelect;
