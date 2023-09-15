import React, { memo } from 'react';
import cn from 'clsx';
import Input from 'antd/lib/input';
import { FormikHandlers } from 'formik/dist/types';
import { LockOutlined } from '@ant-design/icons';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validation';
import { RepeatPasswordFormProps } from '../types';
import s from './RepeatPasswordField.sass';

export type PasswordFieldProps = Pick<RepeatPasswordFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onPressEnter: () => void;
  onBlur: FormikHandlers['handleBlur'];
  title: React.ReactNode;
  placeholder: string;
};

const prefix = <LockOutlined className="site-form-item-icon" />;

export const RepeatPasswordField = memo<PasswordFieldProps>(
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
    submitCount,
  }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem className={cn(s.root, className)} title={title} required validateStatus={validateStatus} help={help}>
        <Input.Password
          prefix={prefix}
          onPressEnter={onPressEnter}
          disabled={disabled}
          data-cy="input"
          name="repeatPassword"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </FormItem>
    );
  }
);

RepeatPasswordField.displayName = 'RepeatPasswordField';
