import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Card from '../UI/Card/Card';
import style from './RolSelect.module.css';
import { SIGNIN, SIGNUP } from '../../Routes';

const rolSelect = props => {
  const { history } = props;

  return (
    <Aux>
      <div className={style['container']}>
        <div className={style['rol-container']}>
          <h1>Elige tu rol:</h1>
          <div className={style['card-container']}>
            <Card label="Usuario" route={history} path={SIGNIN}>
              <img src="user.svg" alt="user-icon" />
            </Card>
            <Card label="Empresa" route={history} path={SIGNUP}>
              <img src="group.svg" alt="owner-icon" />
            </Card>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default rolSelect;
