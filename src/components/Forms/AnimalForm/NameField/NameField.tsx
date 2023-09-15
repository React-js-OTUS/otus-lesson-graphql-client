import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validation';
import { AnimalFormProps, AnimalFormValues, FormHandlers } from '../types';
import s from './NameField.sass';

export type NameFieldProps = Pick<AnimalFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: AnimalFormValues['name'];
  onPressEnter: () => void;
  onChange: FormHandlers['handleChange'];
  onBlur: FormHandlers['handleBlur'];
  title: React.ReactNode;
  placeholder: string;
};

export const NameField = memo<NameFieldProps>(
  ({
    className,
    onChange,
    title,
    placeholder,
    onBlur,
    onPressEnter,
    autoFocusElement,
    touched,
    value,
    errors,
    disabled,
    submitCount,
  }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem className={cn(s.root, className)} title={title} required validateStatus={validateStatus} help={help}>
        <Input
          disabled={disabled}
          ref={autoFocusElement}
          onPressEnter={onPressEnter}
          autoFocus
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </FormItem>
    );
  }
);

NameField.displayName = 'NameField';
