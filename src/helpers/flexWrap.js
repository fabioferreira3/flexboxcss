export const setFlexWrap = (wrap, classes) => {
  const flexWrapClasses = [
    'flexwrapwrap',
    'flexwrapnowrap',
    'flexwrapreverse'
  ]
  let updatedClasses = classes.filter(className => {
    return !flexWrapClasses.includes(className);
  });

  switch(wrap) {
    case 'nowrap':
      updatedClasses.push('flexwrapnowrap');
      break;
    case 'wrap':
      updatedClasses.push('flexwrapwrap');
      break;
    case 'wrap-reverse':
      updatedClasses.push('flexwrapreverse');
      break;
    default:
      break;
  }

  return updatedClasses;
}
