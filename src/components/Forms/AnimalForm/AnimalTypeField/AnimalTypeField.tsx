import React, { memo } from 'react';
import cn from 'clsx';
import { FormItem } from 'src/components/FormItem';
import { getFieldCallbacks, getValidates } from 'src/utils/validation';
import { AnimalTypeSelect } from 'src/components/Selections';
import { AnimalFormProps, AnimalFormValues, FormHandlers } from '../types';
import s from './AnimalTypeField.sass';

export type NameFieldProps = Pick<AnimalFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: AnimalFormValues['type'];
  setFieldValue: FormHandlers['setFieldValue'];
  setFieldTouched: FormHandlers['setFieldTouched'];
  title: React.ReactNode;
  placeholder: string;
};

export const AnimalTypeField = memo<NameFieldProps>(
  ({
    className,
    setFieldValue,
    setFieldTouched,
    touched,
    value,
    title,
    placeholder,
    errors,
    disabled,
    submitCount,
  }) => {
    const { onBlur, onChange } = getFieldCallbacks('type', { setFieldTouched, setFieldValue });
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem className={cn(s.root, className)} title={title} required validateStatus={validateStatus} help={help}>
        <AnimalTypeSelect
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </FormItem>
    );
  }
);

AnimalTypeField.displayName = 'NameField';
