import React from 'react';

import style from './Input.module.css';

const input = props => {
  const { elementType, elementConfig, value, changed } = props;
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = <input {...elementConfig} value={value} onChange={changed} />;
      break;
    case 'textarea':
      inputElement = <textarea {...elementConfig} value={value} onChange={changed} />;
      break;

    default:
      inputElement = <input {...elementConfig} value={value} onChange={changed} />;
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
