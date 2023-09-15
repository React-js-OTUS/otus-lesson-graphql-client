import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { EmailFormProps } from './types';
import { EmailField } from './EmailField';
import s from './EmailForm.sass';

export const EmailForm = memo<EmailFormProps>(({ className, formManager, formElement, autoFocusElement, disabled }) => {
  const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange, submitForm } = formManager;
  const { t } = useTranslation();

  return (
    <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
      <EmailField
        title={t(`forms.EmailForm.email.title`)}
        placeholder={t(`forms.EmailForm.email.placeholder`)}
        onPressEnter={submitForm}
        autoFocusElement={autoFocusElement}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errors={errors.email}
        submitCount={submitCount}
        touched={touched.email}
        disabled={disabled}
      />
    </form>
  );
});

EmailForm.displayName = 'EmailForm';
