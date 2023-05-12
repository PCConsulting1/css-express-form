import { Control, FieldValues } from 'react-hook-form';
import FormInput from '../inputs/FormInput';
import Container from '@mui/material/Container';
//TODO: take a question object and display it
//Question on the left, input on the right
//Small screen has question above input

interface Props {
  control: Control<FieldValues, any>;
  questions: { name: string; label: string; variant?: string }[];
}

export default function ({ control, questions }: Props) {
  //format questions with personal information
  //loop through questions and render input
  return (
    <Container
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100vw',
        margin: 0,
      }}
    >
      <Container sx={{ width: 250, padding: 0, margin: 0 }}>
        {questions.map((question) => {
          return (
            <FormInput
              name={question.name}
              control={control}
              label={question.label}
              variant={question.variant}
              key={question.name}
            />
          );
        })}
      </Container>
    </Container>
  );
}
