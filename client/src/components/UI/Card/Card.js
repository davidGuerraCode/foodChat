import React, { useEffect, useState } from 'react';
import style from './Card.module.css';

const card = props => {
  const { children, grow } = props;
  const [classes, setClasses] = useState([style.Card]);

  useEffect(() => {
    if (grow) {
      setClasses([...classes, style.Grow]);
    }
  }, [grow]);

  return <div className={classes.join(' ')}>{children}</div>;
};

export default card;
