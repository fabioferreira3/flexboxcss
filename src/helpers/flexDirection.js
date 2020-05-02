export const setFlexDirection = (direction, classes) => {
  const flexDirectionClasses = [
    'flexdirectionrow',
    'flexdirectionrreverse',
    'flexdirectioncolumn',
    'flexdirectioncolreverse'
  ];
  let updatedClasses = classes.filter(className => {
    return !flexDirectionClasses.includes(className);
  });

  switch(direction) {
    case 'row':
      updatedClasses.push('flexdirectionrow');
      break;
    case 'row-reverse':
      updatedClasses.push('flexdirectionrreverse');
      break;
    case 'column':
      updatedClasses.push('flexdirectioncolumn');
      break;
    case 'column-reverse':
      updatedClasses.push('flexdirectioncolreverse');
      break;
    default:
      break;
  }

  return updatedClasses;
}
