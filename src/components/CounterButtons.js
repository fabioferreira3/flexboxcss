import React, { useMemo } from 'react';
import classNames from 'classnames';

export const CounterButtons = (props) => {
  const { imagesSet, callback } = props;

  const renderButtons = () => {
    const buttons = [];
    for (let x = 1; x <= 10; x++) {
      buttons.push(
        <button className={classNames('count', imagesSet === x ? 'active' : '')}
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
