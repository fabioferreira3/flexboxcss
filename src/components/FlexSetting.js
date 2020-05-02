import React from 'react';
import _ from "lodash"
import { Button } from "./Button"

export const FlexSetting = (props) => {
  const { title, classDefinitions, callback, currentClasses } = props;
  return (
    <>
      <h2>{title}</h2>
      {_.map(classDefinitions, (className, idx) => {
        return <Button key={idx} action={callback} targetClass={className.name} classes={currentClasses}>{className.atrDef}</Button>
      })}
    </>
  )
};
