import React, { memo } from 'react';
import cn from 'clsx';
import { FormItem } from 'src/components/FormItem';
import { getFieldCallbacks, getValidates } from 'src/utils/validation';
import { DiseasesSelect } from 'src/components/Selections/DiseasesSelect';
import { Disease } from 'src/server.types';
import { AnimalFormProps, AnimalFormValues, AnimalFormHandlers } from '../types';
import s from './DiseasesField.sass';

export type DiseasesFieldProps = Pick<AnimalFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  items: Disease[];
  value: AnimalFormValues['diseaseIds'];
  setFieldValue: AnimalFormHandlers['setFieldValue'];
  setFieldTouched: AnimalFormHandlers['setFieldTouched'];
  title: React.ReactNode;
  placeholder: string;
  required: boolean;
};

export const DiseasesField = memo<DiseasesFieldProps>(
  ({
    className,
    setFieldValue,
    setFieldTouched,
    touched,
    title,
    placeholder,
    items,
    value,
    errors,
    disabled,
    submitCount,
    required,
  }) => {
    const { onBlur, onChange } = getFieldCallbacks('diseaseIds', { setFieldTouched, setFieldValue });
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        required={required}
        className={cn(s.root, className)}
        title={title}
        validateStatus={validateStatus}
        help={help}
      >
        <DiseasesSelect
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          items={items}
          placeholder={placeholder}
        />
      </FormItem>
    );
  }
);

DiseasesField.displayName = 'DiseasesField';
