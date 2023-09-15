import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validation';
import { AnimalFormProps, AnimalFormValues, AnimalFormHandlers } from '../types';
import s from './CommentField.sass';

export type CommentFieldProps = Pick<AnimalFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: AnimalFormValues['comment'];
  onPressEnter: () => void;
  onChange: AnimalFormHandlers['handleChange'];
  onBlur: AnimalFormHandlers['handleBlur'];
  title: React.ReactNode;
  placeholder: string;
  required: boolean;
};

export const CommentField = memo<CommentFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    title,
    placeholder,
    onPressEnter,
    touched,
    value,
    errors,
    disabled,
    submitCount,
    required,
  }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        required={required}
        className={cn(s.root, className)}
        title={title}
        validateStatus={validateStatus}
        help={help}
      >
        <Input.TextArea
          disabled={disabled}
          onPressEnter={onPressEnter}
          name="comment"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </FormItem>
    );
  }
);

CommentField.displayName = 'CommentField';
