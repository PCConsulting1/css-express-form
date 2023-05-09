import { useForm } from 'react-hook-form';
import { useState } from 'react';
import FormInput from '../components/inputs/FormInput';

export default function () {
  const { handleSubmit, control, formState } = useForm({
    mode: 'onTouched',
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ paddingTop: 20, maxWidth: '100vw' }}
    >
      <FormInput
        variant="phone"
        name="test"
        control={control}
        label="this is a test"
      />
    </form>
  );
}
