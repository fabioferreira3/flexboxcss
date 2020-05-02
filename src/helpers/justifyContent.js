export const setJustifyContent = (justifyContent, classes) => {
  const justifyContentClasses = [
    'justifycontentflexstart',
    'justifycontentflexend',
    'justifycontentcenter',
    'justifycontentspacebetween',
    'justifycontentspacearound',
    'justifycontentspaceevenly'
  ]
  let updatedClasses = classes.filter(className => {
    return !justifyContentClasses.includes(className);
  });

  switch(justifyContent) {
    case 'flex-start':
      updatedClasses.push('justifycontentflexstart');
      break;
    case 'flex-end':
      updatedClasses.push('justifycontentflexend');
      break;
    case 'center':
      updatedClasses.push('justifycontentcenter');
      break;
    case 'space-between':
      updatedClasses.push('justifycontentspacebetween');
      break;
    case 'space-around':
      updatedClasses.push('justifycontentspacearound');
      break;
    case 'space-evenly':
      updatedClasses.push('justifycontentspaceevenly');
      break;
    default:
      break;
  }

  return updatedClasses;
}
