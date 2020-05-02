import React from 'react';

export const Button = (props) => {
  const { action, targetClass, classes, children } = props;

  return (
    <button className={classes.includes(targetClass) ? 'on' : 'off'} onClick={() => action(targetClass)}>
      {children}
    </button>
  )
}
