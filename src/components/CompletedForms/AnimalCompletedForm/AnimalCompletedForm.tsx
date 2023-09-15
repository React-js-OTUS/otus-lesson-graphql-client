import React, { FC, useMemo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { FormikConfig, useFormik } from 'formik';
import { AnimalForm, AnimalFormErrors, AnimalFormValues } from 'src/components/Forms';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { Button, message } from 'antd';
import { isNotDefinedString } from 'src/utils/validation';
import { Title } from 'src/components/Title';
import { ADD_ANIMAL, AddAnimalData, AddAnimalVars } from './connection';
import s from './AnimalCompletedForm.sass';

export type AnimalCompletedFormProps = {
  className?: string;
  title: React.ReactNode;
  submitText: React.ReactNode;
  successMessageText: React.ReactNode;
};

const initialValues: AnimalFormValues = {
  age: undefined,
  comment: undefined,
  diseaseIds: undefined,
  doctorId: undefined,
  name: undefined,
  type: undefined,
};

export const AnimalCompletedForm: FC<AnimalCompletedFormProps> = ({
  className,
  successMessageText,
  submitText,
  title,
}) => {
  const { t } = useTranslation();
  const [add, { loading }] = useMutation<AddAnimalData, AddAnimalVars>(ADD_ANIMAL);

  const { onSubmit, validate } = useMemo<Pick<FormikConfig<AnimalFormValues>, 'onSubmit' | 'validate'>>(() => {
    const { catcher } = createErrorHandlers<keyof AnimalFormValues>((code, _, error) => {
      if (code === null) {
        message.error(t(`errors.${error.message}`));
      } else {
        message.error(t(`errors.${code}`));
      }
    });
    return {
      onSubmit: (values, { resetForm }) => {
        add({ variables: { input: values } })
          .then(() => {
            resetForm();
            message.success(successMessageText);
          })
          .catch(catcher);
      },
      validate: (values) => {
        const errors = {} as AnimalFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = t(`errors.is_required`);
        }
        if (isNotDefinedString(values.type)) {
          errors.type = t(`errors.is_required`);
        }
        return errors;
      },
    };
  }, [successMessageText, t, add]);

  const formManager = useFormik<AnimalFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm } = formManager;

  return (
    <div className={cn(s.root, className)}>
      <Title className={s.title}>{title}</Title>
      <AnimalForm formManager={formManager} />
      <Button type="primary" loading={loading} onClick={submitForm}>
        {submitText}
      </Button>
    </div>
  );
};
