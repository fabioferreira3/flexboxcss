export const setAlignItems = (alignItems, classes) => {
  const alignItemsClasses = [
    'alignitemsflexstart',
    'alignitemsflexend',
    'alignitemscenter',
    'alignitemsstretch',
    'alignitemsstretch',
    'alignitemsbaseline'
  ]
  let updatedClasses = classes.filter(className => {
    return !alignItemsClasses.includes(className);
  });

  switch(alignItems) {
    case 'flex-start':
      updatedClasses.push('alignitemsflexstart');
      break;
    case 'flex-end':
      updatedClasses.push('alignitemsflexend');
      break;
    case 'center':
      updatedClasses.push('alignitemscenter');
      break;
    case 'stretch':
      updatedClasses.push('alignitemsstretch');
      break;
    case 'baseline':
      updatedClasses.push('alignitemsbaseline');
      break;
    default:
      break;
  }

  return updatedClasses;
}
