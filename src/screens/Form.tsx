import { useForm } from 'react-hook-form';
import FormInput from '../components/inputs/FormInput';
// import FormContainer from '../components/form/FormContainer';

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
        {/* <FormContainer control={control} questions={questions.studentBasic} /> */}
        <FormInput
          variant="basic"
          name="basicTest"
          control={control}
          label="this is a test a really long test that should be used to see the results"
        />
        <FormInput
          variant="checkbox"
          name="checkboxTest"
          control={control}
          label="this is another test"
        />
        <FormInput
          variant="phone"
          name="phoneTest"
          control={control}
          label="this is a phone"
        />
        <FormInput
          variant="select"
          name="selectTest"
          control={control}
          label="this is a select"
          options={['one', 'two', 'three']}
        />
        <input type="submit" />
      </form>
    </>
  );
}
