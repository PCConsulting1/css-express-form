import * as questions from './questions.data';

/* groups the questions into sections - will be modified during runtime based on form responses*/

export const initialSections = [
  { about: 'the student', formQuestions: questions.Basic },
  { about: '', formQuestions: questions.studentDemographic },
];

export const additions = {
  newParent: { about: '' },
  newSibling: { about: '' },
  newCollege: { about: '', formQuestions: questions.studentApplying },
  newStudent1040: { about: '', formQuestions: questions.student1040 },
  newStudentSchedule3: { about: '', formQuestions: questions.studentSchedule3 },
  newParent1040: { about: '' },
  newParentSchedule1: { about: '' },
  newParentSchedule2: { about: '' },
  newParentSchedule3: { about: '' },
};
