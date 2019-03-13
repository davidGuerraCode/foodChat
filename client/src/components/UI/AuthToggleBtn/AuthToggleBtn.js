import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import style from './AuthToggleBtn.module.css';

const authToggleBtn = props => {
  return (
    <Aux>
      <div className={style['toggle-btn-container']} />
    </Aux>
  );
};

export default authToggleBtn;
