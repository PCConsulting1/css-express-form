import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormContainer from '../components/form/FormContainer';

import { initialSections } from '../data/sections.data';
import {
  needsAddition,
  needsUpdate,
  addSection,
  updateSectionsAbout,
} from '../components/functions/sections';

export default function () {
  const [currentSection, setCurrentSection] = useState(0);
  const [lastSection, setLastSection] = useState(1);
  const [sections, setSections] = useState(initialSections);
  const { handleSubmit, control, formState } = useForm({
    mode: 'onTouched',
  });
  const onSubmit = (data: any) => {
    if (currentSection == lastSection) {
      //actually submit
      console.log(data);
    } else {
      if (needsAddition(data, sections)) {
        //add section
      } else if (needsUpdate(data, sections)) {
        //update about
      }
      //if needed to add sections, update lastsection number
      setLastSection(Object.keys(sections).length - 1);
      //go to next section
      setCurrentSection((currentSection) => currentSection + 1);
    }
  };

  //! iterate through object of question groups and call function
  //! to initialize questions with data from previous questions
  return (
    <>
      {/* //TODO:  Sections first section will be used to initialize all other's*/}
      <Typography variant="h5">
        Tell us about {sections[currentSection].about}
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          paddingTop: 20,
          maxWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FormContainer
          control={control}
          questions={sections[currentSection].formQuestions}
        />
        {/* //TODO: Next and Back buttons */}
        <Button
          onClick={() =>
            setCurrentSection((currentSection) => currentSection - 1)
          }
        >
          {currentSection == lastSection ? 'Back' : ''}
        </Button>
        <Button type="submit">
          {currentSection == lastSection ? 'Finish' : 'Next'}
        </Button>
        {/*Submit only appears at the end */}
      </form>
    </>
  );
}
