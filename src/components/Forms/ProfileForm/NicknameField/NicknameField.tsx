import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types';
import { UserOutlined } from '@ant-design/icons';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validation';
import { ProfileFormProps } from '../types';
import s from './NicknameField.sass';

export type NameFieldProps = Pick<ProfileFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  title: React.ReactNode;
  placeholder: string;
};

const prefix = <UserOutlined />;

export const NicknameField = memo<NameFieldProps>(
  ({
    className,
    onChange,
    title,
    placeholder,
    onBlur,
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
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          autoFocus
          name="nickname"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </FormItem>
    );
  }
);

NicknameField.displayName = 'NameField';
