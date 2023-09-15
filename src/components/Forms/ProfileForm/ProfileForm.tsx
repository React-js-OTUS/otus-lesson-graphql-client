import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { ProfileFormProps } from './types';
import { NicknameField } from './NicknameField';
import s from './ProfileForm.sass';

export const ProfileForm = memo<ProfileFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;
    const { t } = useTranslation();

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <NicknameField
          title={t(`forms.ProfileForm.nickname.title`)}
          placeholder={t(`forms.ProfileForm.nickname.placeholder`)}
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.nickname}
          errors={errors.nickname}
          submitCount={submitCount}
          touched={touched.nickname}
          disabled={disabled}
        />
      </form>
    );
  }
);

ProfileForm.displayName = 'ProfileForm';
