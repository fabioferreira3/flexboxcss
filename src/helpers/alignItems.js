import { classesDefs } from "./classesNames"

export const setAlignItems = (alignItems, classes) => {
  const alignItemsClasses = [
    classesDefs.AlignItemsFlexStart,
    classesDefs.AlignItemsFlexEnd,
    classesDefs.AlignItemsCenter,
    classesDefs.AlignItemsStretch,
    classesDefs.AlignItemsBaseline
  ]
  let updatedClasses = classes.filter(className => {
    return !alignItemsClasses.includes(className);
  });

  updatedClasses.push(alignItems);

  return updatedClasses;
}
