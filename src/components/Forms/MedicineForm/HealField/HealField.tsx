import React, { memo } from 'react';
import cn from 'clsx';
import { FormItem } from 'src/components/FormItem';
import { getFieldCallbacks, getValidates } from 'src/utils/validation';
import { Disease } from 'src/server.types';
import { DiseaseTypeSelect } from 'src/components/Selections';
import { MedicineFormProps, MedicineFormValues, MedicineFormHandlers } from '../types';
import s from './HealField.sass';

export type HealFieldProps = Pick<MedicineFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: MedicineFormValues['heal'];
  setFieldValue: MedicineFormHandlers['setFieldValue'];
  setFieldTouched: MedicineFormHandlers['setFieldTouched'];
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
        <DiseaseTypeSelect
          mode="multiple"
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

HealField.displayName = 'HealField';
