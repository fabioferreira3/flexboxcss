import React, { useMemo } from 'react';

export const CounterButtons = (props) => {
  const { imagesSet, callback } = props;

  const renderButtons = () => {
    const buttons = [];
    for (let x = 1; x <= 10; x++) {
      buttons.push(
        <button className={imagesSet === x ? 'active' : ''}
                key={x} onClick={() => callback(x)}
        > {x}
        </button>);
    }
    return buttons;
  }

  return useMemo(() => (
    <>
      {renderButtons()}
    </>
  ), [imagesSet])
};
