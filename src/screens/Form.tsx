import { useForm } from 'react-hook-form';
import { useState } from 'react';
// import FormInput from '../components/inputs/FormInput';
import FormContainer from '../components/form/formContainer';

import * as questions from '../data/questions.data';

export default function () {
  const { handleSubmit, control, formState } = useForm({
    mode: 'onTouched',
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  //! iterate through object of question groups and call function
  //! to initialize questions with data from previous questions
  return (
    <>
      <h1>Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ paddingTop: 20, maxWidth: '100vw' }}
      >
        <FormContainer control={control} questions={questions.studentBasic} />
        {/* <FormInput
        variant="phone"
        name="test"
        control={control}
        label="this is a test"
      /> */}
      </form>
    </>
  );
}
