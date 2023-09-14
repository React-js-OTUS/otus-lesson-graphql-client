import React, { memo } from 'react';
import cn from 'clsx';
import { AuthFormProps } from './types';
import { PasswordField } from './PasswordField';
import { NicknameField } from './NicknameField';
import s from './AuthForm.sass';

export const AuthForm = memo<AuthFormProps>(({ className, formManager, formElement, autoFocusElement, disabled }) => {
  const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange, submitForm } = formManager;

  return (
    <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
      <NicknameField
        onPressEnter={submitForm}
        autoFocusElement={autoFocusElement}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.nickname}
        errors={errors.nickname}
        submitCount={submitCount}
        touched={touched.nickname}
        disabled={disabled}
      />
      <PasswordField
        onPressEnter={submitForm}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        disabled={disabled}
      />
    </form>
  );
});

AuthForm.displayName = 'AuthForm';
