type RemoveDuplicatedClasses = {
  classes: Array<string>;
};

export function removeDuplicatedClasses({ classes }: RemoveDuplicatedClasses) {
  const classesAsArray = classes.join(' ').split(' ');

  const classesAsArrayWithoutDuplicated = [...new Set(classesAsArray)];

  return classesAsArrayWithoutDuplicated.join(' ').replace(/\s+/g, ' ').trim();
}
