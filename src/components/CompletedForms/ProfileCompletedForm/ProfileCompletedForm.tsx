import React, { memo, useEffect, useMemo } from 'react';
import cn from 'clsx';
import { FormikConfig, useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { Button, message } from 'antd';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ProfileForm, ProfileFormValues, ProfileFormErrors } from 'src/components/Forms/ProfileForm';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { isNotDefinedString } from 'src/utils/validation';
import { profileSelectors } from 'src/store/profile';
import { Title } from 'src/components/Title';
import { UPDATE_PROFILE, UpdateProfileResponse, UpdateProfileVars } from './connection';
import s from './ProfileCompletedForm.sass';

export type ProfileCompletedFormProps = {
  className?: string;
  title: React.ReactNode;
  submitText: React.ReactNode;
  successMessageText: React.ReactNode;
};

export const ProfileCompletedForm = memo<ProfileCompletedFormProps>(
  ({ className, title, successMessageText, submitText }) => {
    const profile = useSelector(profileSelectors.get);
    const { t } = useTranslation();
    const [update, { loading }] = useMutation<UpdateProfileResponse, UpdateProfileVars>(UPDATE_PROFILE);

    const { onSubmit, validate, initialValues } = useMemo<
      Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
    >(() => {
      const { catcherValidator } = createErrorHandlers<keyof ProfileFormValues>(
        (code, _, error) => {
          if (code === null) {
            message.error(t(`errors.${error.message}`));
          } else {
            message.error(t(`errors.${code}`));
          }
        },
        {
          nickname: ['ERR_INVALID_NICKNAME'],
        }
      );
      return {
        initialValues: {
          nickname: profile?.nickname,
        },
        onSubmit: (values, { setErrors }) => {
          update({ variables: { input: { nickname: values.nickname } } })
            .then(() => message.success(successMessageText))
            .catch(catcherValidator({ setErrors, getMessage: (code) => t(`errors.${code}`) }));
        },
        validate: (values) => {
          const errors = {} as ProfileFormErrors;
          if (isNotDefinedString(values.nickname)) {
            errors.nickname = t(`errors.is_required`);
          }
          return errors;
        },
      };
    }, [profile?.nickname, successMessageText, t, update]);

    const formManager = useFormik<ProfileFormValues>({
      initialValues,
      onSubmit,
      validate,
    });
    const { submitForm, setValues } = formManager;

    useEffect(() => {
      setValues({ nickname: profile?.nickname });
    }, [profile, setValues]);

    return (
      <div className={cn(s.root, className)}>
        <Title className={s.title}>{title}</Title>
        <ProfileForm formManager={formManager} />
        <Button type="primary" loading={loading} onClick={submitForm}>
          {submitText}
        </Button>
      </div>
    );
  }
);

ProfileCompletedForm.displayName = 'ProfileCompletedForm';
