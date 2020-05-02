import { classesDefs } from "./classesNames"

export const setAlignContent = (alignContent, classes) => {
  const alignContentClasses = [
    classesDefs.AlignContentFlexStart,
    classesDefs.AlignContentFlexEnd,
    classesDefs.AlignContentCenter,
    classesDefs.AlignContentStretch,
    classesDefs.AlignContentSpaceBetween,
    classesDefs.AlignContentSpaceAround
  ]
  let updatedClasses = classes.filter(className => {
    return !alignContentClasses.includes(className);
  });

  updatedClasses.push(alignContent);

  return updatedClasses;
}
