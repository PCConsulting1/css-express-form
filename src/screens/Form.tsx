import { useForm } from 'react-hook-form';
import { useState } from 'react';

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
    ></form>
  );
}
