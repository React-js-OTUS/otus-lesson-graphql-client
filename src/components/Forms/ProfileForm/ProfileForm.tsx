import React, { memo } from 'react';
import cn from 'clsx';
import { ProfileFormProps } from './types';
import { NicknameField } from './NicknameField';
import s from './ProfileForm.sass';

export const ProfileForm = memo<ProfileFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <NicknameField
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
