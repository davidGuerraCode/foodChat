import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import style from './Card.module.css';

const card = props => {
  const { label, route, path, children } = props;

  function goTo() {
    // route.push(path);
    route.push('/auth');
  }

  return (
    <Aux>
      <div className={style['card-content']} onClick={goTo}>
        <div className={style['card']}>
          <span className={style['icon-container']}>{children}</span>
        </div>
        <p>{label}</p>
      </div>
    </Aux>
  );
};

export default card;
