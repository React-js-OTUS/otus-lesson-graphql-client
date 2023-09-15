import React, { memo } from 'react';
import cn from 'clsx';
import { FormItem } from 'src/components/FormItem';
import { getFieldCallbacks, getValidates } from 'src/utils/validation';
import { DiseaseTypeSelect } from 'src/components/Selections';
import { DiseaseFormProps, DiseaseFormValues, FormHandlers } from '../types';
import s from './TypeField.sass';

export type TypeFieldProps = Pick<DiseaseFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: DiseaseFormValues['type'];
  setFieldValue: FormHandlers['setFieldValue'];
  setFieldTouched: FormHandlers['setFieldTouched'];
  title: React.ReactNode;
  placeholder: string;
  required: boolean;
};

export const TypeField = memo<TypeFieldProps>(
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
    const { onBlur, onChange } = getFieldCallbacks('type', { setFieldTouched, setFieldValue });
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

TypeField.displayName = 'TypeField';
