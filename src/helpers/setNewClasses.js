import _ from 'lodash';

export const setNewClasses = (targetClass, currentClasses, classDefinition) => {

  let updatedClasses = currentClasses.filter(className => {
    const names = _.map(classDefinition, (atr) => atr.name);
    return !_.includes(names, className);
  });

  updatedClasses.push(targetClass)

  return updatedClasses;
}
