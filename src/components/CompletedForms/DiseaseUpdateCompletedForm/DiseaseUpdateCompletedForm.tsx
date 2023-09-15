import React, { forwardRef, useMemo, useImperativeHandle, useRef } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { FetchResult, useMutation } from '@apollo/client';
import { FormikConfig, useFormik } from 'formik';
import { DiseaseForm, DiseaseFormErrors, DiseaseFormProps, DiseaseFormRequired } from 'src/components/Forms';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { Button, message } from 'antd';
import { isNotDefinedString } from 'src/utils/validation';
import { Title } from 'src/components/Title';
import deepEqual from 'fast-deep-equal';
import { deepClear } from 'src/utils/deepClear';
import { DiseaseInput } from 'src/server.types';
import { UPDATE_DISEASE, UpdateDiseaseData, UpdateDiseaseVars } from './connection';
import s from './DiseaseUpdateCompletedForm.sass';

export type DiseaseUpdateCompletedFormProps = Omit<DiseaseFormProps, 'formManager'> & {
  className?: string;
  onSuccess?: (result: FetchResult<UpdateDiseaseData>) => void;
  title: React.ReactNode;
  submitText: React.ReactNode;
  successMessageText: React.ReactNode;
  id: string;
};

export type DiseaseUpdateCompletedFormRef = {
  setValue: (value: DiseaseInput) => void;
  isChanged: () => boolean;
};

const initialValues: DiseaseInput = {
  name: undefined,
  desc: undefined,
  type: undefined,
};

const required: DiseaseFormRequired = {
  name: true,
  type: true,
  desc: false,
};

export const DiseaseUpdateCompletedForm = forwardRef<DiseaseUpdateCompletedFormRef, DiseaseUpdateCompletedFormProps>(
  ({ className, successMessageText, submitText, id, onSuccess, title, ...props }, ref) => {
    const { t } = useTranslation();
    const [update, { loading }] = useMutation<UpdateDiseaseData, UpdateDiseaseVars>(UPDATE_DISEASE);

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
          update({ variables: { id, input: values as UpdateDiseaseVars['input'] } })
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
    }, [id, t, update, onSuccess, successMessageText]);

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
        <DiseaseForm required={required} formManager={formManager} {...props} />
        <Button type="primary" loading={loading} onClick={submitForm}>
          {submitText}
        </Button>
      </div>
    );
  }
);
