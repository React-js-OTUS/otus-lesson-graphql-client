import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { RepeatPasswordFormProps } from './types';
import { PasswordField } from './PasswordField';
import { RepeatPasswordField } from './RepeatPasswordField';
import s from './RepeatPasswordForm.sass';

export const RepeatPasswordForm = memo<RepeatPasswordFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange, submitForm } = formManager;
    const { t } = useTranslation();

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <PasswordField
          title={t(`forms.RepeatPasswordForm.password.title`)}
          placeholder={t(`forms.RepeatPasswordForm.password.placeholder`)}
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
        <RepeatPasswordField
          title={t(`forms.RepeatPasswordForm.repeatPassword.title`)}
          placeholder={t(`forms.RepeatPasswordForm.repeatPassword.placeholder`)}
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

RepeatPasswordForm.displayName = 'RepeatPasswordForm';
