import Container from '@mui/material/Container';
import { Control, FieldValues } from 'react-hook-form';
import FormInput from '../inputs/FormInput';
//TODO: take a question object and display it
//Question on the left, input on the right
//Small screen has question above input

interface Props {
  control: Control<FieldValues, any>;
  questions: { name: string; label: string }[];
}

export default function ({ control, questions }: Props) {
  //format questions with personal information
  //loop through questions and render input
  return (
    <>
      <h1>Form Container</h1>
      {questions.map((question) => {
        return (
          <FormInput
            name={question.name}
            control={control}
            label={question.label}
            key={question.name}
          />
        );
      })}
    </>
  );
}
