import React, { memo } from 'react';
import cn from 'clsx';
import { FormItem } from 'src/components/FormItem';
import { getFieldCallbacks, getValidates } from 'src/utils/validation';
import { DiseasesSelect } from 'src/components/Selections/DiseasesSelect';
import { Disease } from 'src/server.types';
import { MedicineFormProps, MedicineFormValues, FormHandlers } from '../types';
import s from './HealField.sass';

export type HealFieldProps = Pick<MedicineFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  items: Disease[];
  value: MedicineFormValues['heal'];
  setFieldValue: FormHandlers['setFieldValue'];
  setFieldTouched: FormHandlers['setFieldTouched'];
  title: React.ReactNode;
  placeholder: string;
  required: boolean;
};

export const HealField = memo<HealFieldProps>(
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
    const { onBlur, onChange } = getFieldCallbacks('heal', { setFieldTouched, setFieldValue });
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

HealField.displayName = 'HealField';
