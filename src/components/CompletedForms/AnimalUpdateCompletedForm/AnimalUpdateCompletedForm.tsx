import React, { forwardRef, useMemo, useImperativeHandle, useRef } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { FetchResult, useMutation } from '@apollo/client';
import { FormikConfig, useFormik } from 'formik';
import { AnimalForm, AnimalFormErrors, AnimalFormProps, AnimalFormRequired } from 'src/components/Forms';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { Button, message } from 'antd';
import { isNotDefinedString } from 'src/utils/validation';
import { Title } from 'src/components/Title';
import deepEqual from 'fast-deep-equal';
import { deepClear } from 'src/utils/deepClear';
import { AnimalUpdateInput } from 'src/server.types';
import { UPDATE_ANIMAL, UpdateAnimalData, UpdateAnimalVars } from './connection';
import s from './AnimalUpdateCompletedForm.sass';

export type AnimalUpdateCompletedFormProps = Omit<AnimalFormProps, 'formManager'> & {
  className?: string;
  onSuccess?: (result: FetchResult<UpdateAnimalData>) => void;
  title: React.ReactNode;
  submitText: React.ReactNode;
  successMessageText: React.ReactNode;
  id: string;
};

export type AnimalUpdateCompletedFormRef = {
  setValue: (value: AnimalUpdateInput) => void;
  isChanged: () => boolean;
};

const initialValues: AnimalUpdateInput = {
  age: undefined,
  comment: undefined,
  diseaseIds: undefined,
  doctorId: undefined,
  name: undefined,
  type: undefined,
};

const required: AnimalFormRequired = {
  name: true,
  type: true,
  diseaseIds: false,
  comment: false,
  doctorId: false,
  age: false,
};

export const AnimalUpdateCompletedForm = forwardRef<AnimalUpdateCompletedFormRef, AnimalUpdateCompletedFormProps>(
  ({ className, successMessageText, submitText, id, onSuccess, title, ...props }, ref) => {
    const { t } = useTranslation();
    const [update, { loading }] = useMutation<UpdateAnimalData, UpdateAnimalVars>(UPDATE_ANIMAL);

    const { onSubmit, validate } = useMemo<Pick<FormikConfig<AnimalUpdateInput>, 'onSubmit' | 'validate'>>(() => {
      const { catcher } = createErrorHandlers<keyof AnimalUpdateInput>((code, _, error) => {
        if (code === null) {
          message.error(t(`errors.${error.message}`));
        } else {
          message.error(t(`errors.${code}`));
        }
      });
      return {
        onSubmit: (values, { resetForm }) => {
          update({ variables: { id, input: values as UpdateAnimalVars['input'] } })
            .then((res) => {
              onSuccess?.(res);
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
    }, [id, t, update, onSuccess, successMessageText]);

    const formManager = useFormik<AnimalUpdateInput>({
      initialValues,
      onSubmit,
      validate,
    });
    const { submitForm, setValues, values } = formManager;

    const initial = useRef(initialValues);

    useImperativeHandle(ref, () => ({
      setValue: (v) => {
        initial.current = v;
        setValues(v);
      },
      isChanged: () => !deepEqual(deepClear(values), deepClear(initial.current)),
    }));

    return (
      <div className={cn(s.root, className)}>
        <Title className={s.title}>{title}</Title>
        <AnimalForm required={required} formManager={formManager} {...props} />
        <Button type="primary" loading={loading} onClick={submitForm}>
          {submitText}
        </Button>
      </div>
    );
  }
);
