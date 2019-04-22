import React from 'react';

import style from './Input.module.css';

const input = props => {
  const { elementType, elementConfig, value } = props;
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = <input {...elementConfig} value={value} />;
      break;
    case 'textarea':
      inputElement = <textarea {...elementConfig} value={value} />;
      break;

    default:
      inputElement = <input {...elementConfig} value={value} />;
      break;
  }

  return (
    <div className={style.Input}>
      {inputElement}
      <span className={style.IconContainer}>
        <i className={props.icon} />
      </span>
    </div>
  );
};

export default input;
