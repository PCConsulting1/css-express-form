import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import {
  Controller,
  FieldError,
  FieldValue,
  Control,
  FieldValues,
} from 'react-hook-form';
import { PatternFormat, NumericFormat } from 'react-number-format';
import Question from './Question';

const formats = {
  social: '### - ## - ####',
  phone: '+1 (###) ### ####',
  date: '## / ## / ####',
};

const rules = {
  email: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
    message: 'Invalid Email',
  },
};

interface FieldProps {
  value: FieldValue<any>;
  onChange: any;
  error?: FieldError | undefined;
}

const CustomField = ({ value, onChange, error }: FieldProps) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error ? error.message : null}
      sx={{ minWidth: 250 }}
    />
  );
};

interface Props {
  variant?: string;
  name: string;
  control: Control<FieldValues, any>;
  label: string;
  isRequired?: boolean;
  defaultValue?: string | boolean;
  options?: Array<string>;
}

const getInputType = (
  label: string,
  value: FieldValue<any>,
  onChange: any,
  variant?: string,
  options?: Array<string>,
  error?: FieldError | undefined
) => {
  switch (variant) {
    case 'select':
      return (
        <Question>
          <Typography>{label}</Typography>
          <Select
            variant="outlined"
            value={value || ''}
            displayEmpty
            onChange={onChange}
            error={!!error}
            sx={{ width: 250 }}
          >
            <MenuItem value="" disabled>
              Select an Option
            </MenuItem>

            {options &&
              options.map((option: string) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText sx={{ color: 'red', position: 'relative', left: 25 }}>
            {error ? 'Required Field' : null}
          </FormHelperText>
        </Question>
      );
    case 'date':
    case 'phone':
    case 'social':
      return (
        <Question>
          <Typography>{label}</Typography>
          <PatternFormat
            customInput={CustomField}
            format={formats[variant as keyof typeof formats]}
            value={value}
            onValueChange={(v: any) => {
              onChange(v.value);
            }}
            valueIsNumericString
            allowEmptyFormatting
            error={error}
          />
        </Question>
      );
    case 'money':
      return (
        <Question>
          <Typography>{label}</Typography>
          <NumericFormat
            customInput={CustomField}
            value={value}
            onValueChange={(v: any) => {
              onChange(v.floatValue);
            }}
            decimalScale={2}
            fixedDecimalScale
            prefix={'$'}
            error={error}
          />
        </Question>
      );
    case 'checkbox':
      if (typeof value === 'string') {
        value = false;
      }
      return (
        <FormControlLabel
          label={label}
          labelPlacement="top"
          componentsProps={{ typography: { variant: 'body1' } }}
          control={
            <Checkbox color="primary" checked={value} onChange={onChange} />
          }
        />
      );
    default:
      return (
        <Question>
          <Typography>{label}</Typography>
          <TextField
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            sx={{ width: 250 }}
          />
        </Question>
      );
  }
};
export default function ({
  variant = 'basic',
  name,
  control,
  label,
  isRequired = false,
  defaultValue = '',
  options = [],
}: Props) {
  const inputRules = {
    ...rules[variant as keyof typeof rules],
    required: { value: isRequired, message: 'Required Field' },
  };
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={inputRules}
      render={({ field: { onChange, value }, fieldState: { error } }) =>
        getInputType(label, value, onChange, variant, options, error)
      }
    />
  );
}
