import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { ChangePasswordFormProps } from './types';
import { PasswordField } from './PasswordField';
import { RepeatPasswordField } from './RepeatPasswordField';
import { NewPasswordField } from './NewPasswordField';
import s from './ChangePasswordForm.sass';

export const ChangePasswordForm = memo<ChangePasswordFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange, submitForm } = formManager;
    const { t } = useTranslation();

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <PasswordField
          title={t(`forms.ChangePasswordForm.password.title`)}
          placeholder={t(`forms.ChangePasswordForm.password.placeholder`)}
          onPressEnter={submitForm}
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          errors={errors.password}
          submitCount={submitCount}
          touched={touched.password}
          disabled={disabled}
        />
        <NewPasswordField
          title={t(`forms.ChangePasswordForm.newPassword.title`)}
          placeholder={t(`forms.ChangePasswordForm.newPassword.placeholder`)}
          onPressEnter={submitForm}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.newPassword}
          errors={errors.newPassword}
          submitCount={submitCount}
          touched={touched.newPassword}
          disabled={disabled}
        />
        <RepeatPasswordField
          title={t(`forms.ChangePasswordForm.repeatPassword.title`)}
          placeholder={t(`forms.ChangePasswordForm.repeatPassword.placeholder`)}
          onPressEnter={submitForm}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.repeatPassword}
          errors={errors.repeatPassword}
          submitCount={submitCount}
          touched={touched.repeatPassword}
          disabled={disabled}
        />
      </form>
    );
  }
);

ChangePasswordForm.displayName = 'ChangePasswordForm';
