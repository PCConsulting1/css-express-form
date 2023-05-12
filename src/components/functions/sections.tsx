export const addSection = (sections: {}[], sectionToAdd: {}) => {
  //update the form name to avoid collisions
};

//use for about (student/parent name) changes
export const updateSectionsAbout = (sections: {}[], about: string) => {};

//use to see if a section needs to be added
export const needsAddition = (form: {}, sections: {}[]) => {
  return false;
};

export const needsUpdate = (form: {}, sections: {}[]) => {
  return false;
};
