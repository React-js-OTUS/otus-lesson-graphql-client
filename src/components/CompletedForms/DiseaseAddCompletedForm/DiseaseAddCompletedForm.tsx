import React, { forwardRef, useMemo, useImperativeHandle, useRef } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { FetchResult, useMutation } from '@apollo/client';
import { FormikConfig, useFormik } from 'formik';
import { DiseaseForm, DiseaseFormErrors, DiseaseFormProps } from 'src/components/Forms';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { Button, message } from 'antd';
import { isNotDefinedString } from 'src/utils/validation';
import { Title } from 'src/components/Title';
import deepEqual from 'fast-deep-equal';
import { deepClear } from 'src/utils/deepClear';
import { DiseaseInput } from 'src/server.types';
import { ADD_DISEASE, AddDiseaseData, AddDiseaseVars } from './connection';
import s from './DiseaseAddCompletedForm.sass';

export type DiseaseAddCompletedFormProps = Omit<DiseaseFormProps, 'formManager'> & {
  className?: string;
  onSuccess?: (result: FetchResult<AddDiseaseData>) => void;
  title: React.ReactNode;
  submitText: React.ReactNode;
  successMessageText: React.ReactNode;
};

export type DiseaseAddCompletedFormRef = {
  setValue: (value: DiseaseInput) => void;
  isChanged: () => boolean;
};

const initialValues: DiseaseInput = {
  name: undefined,
  desc: undefined,
  type: undefined,
};

export const DiseaseAddCompletedForm = forwardRef<DiseaseAddCompletedFormRef, DiseaseAddCompletedFormProps>(
  ({ className, successMessageText, submitText, onSuccess, title, ...props }, ref) => {
    const { t } = useTranslation();
    const [add, { loading }] = useMutation<AddDiseaseData, AddDiseaseVars>(ADD_DISEASE);

    const { onSubmit, validate } = useMemo<Pick<FormikConfig<DiseaseInput>, 'onSubmit' | 'validate'>>(() => {
      const { catcher } = createErrorHandlers<keyof DiseaseInput>((code, _, error) => {
        if (code === null) {
          message.error(t(`errors.${error.message}`));
        } else {
          message.error(t(`errors.${code}`));
        }
      });
      return {
        onSubmit: (values, { resetForm }) => {
          add({ variables: { input: values as AddDiseaseVars['input'] } })
            .then((res) => {
              onSuccess?.(res);
              resetForm();
              message.success(successMessageText);
            })
            .catch(catcher);
        },
        validate: (values) => {
          const errors = {} as DiseaseFormErrors;
          if (isNotDefinedString(values.name)) {
            errors.name = t(`errors.is_required`);
          }
          if (!values.type) {
            errors.type = t(`errors.is_required`);
          }
          return errors;
        },
      };
    }, [t, add, onSuccess, successMessageText]);

    const formManager = useFormik<DiseaseInput>({
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
        <DiseaseForm formManager={formManager} {...props} />
        <Button type="primary" loading={loading} onClick={submitForm}>
          {submitText}
        </Button>
      </div>
    );
  }
);
