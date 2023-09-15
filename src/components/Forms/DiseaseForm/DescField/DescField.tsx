import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validation';
import { DiseaseFormProps, DiseaseFormValues, FormHandlers } from '../types';
import s from './DescField.sass';

export type DescFieldProps = Pick<DiseaseFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: DiseaseFormValues['desc'];
  onPressEnter: () => void;
  onChange: FormHandlers['handleChange'];
  onBlur: FormHandlers['handleBlur'];
  title: React.ReactNode;
  placeholder: string;
  required: boolean;
};

export const DescField = memo<DescFieldProps>(
  ({
    className,
    onChange,
    title,
    placeholder,
    onBlur,
    onPressEnter,
    touched,
    value,
    errors,
    disabled,
    required,
    submitCount,
  }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(s.root, className)}
        title={title}
        required={required}
        validateStatus={validateStatus}
        help={help}
      >
        <Input.TextArea
          disabled={disabled}
          onPressEnter={onPressEnter}
          autoFocus
          name="desc"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </FormItem>
    );
  }
);

DescField.displayName = 'DescField';
