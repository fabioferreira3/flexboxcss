export const setAlignContent = (alignContent, classes) => {
  const alignContentClasses = [
    'aligncontentflexstart',
    'aligncontentflexend',
    'aligncontentcenter',
    'aligncontentstretch',
    'aligncontentspacebetween',
    'aligncontentspacearound'
  ]
  let updatedClasses = classes.filter(className => {
    return !alignContentClasses.includes(className);
  });

  switch(alignContent) {
    case 'flex-start':
      updatedClasses.push('aligncontentflexstart');
      break;
    case 'flex-end':
      updatedClasses.push('aligncontentflexend');
      break;
    case 'center':
      updatedClasses.push('aligncontentcenter');
      break;
    case 'stretch':
      updatedClasses.push('aligncontentstretch');
      break;
    case 'space-between':
      updatedClasses.push('aligncontentspacebetween');
      break;
    case 'space-around':
      updatedClasses.push('aligncontentspacearound');
      break;
    default:
      break;
  }

  return updatedClasses;
}
