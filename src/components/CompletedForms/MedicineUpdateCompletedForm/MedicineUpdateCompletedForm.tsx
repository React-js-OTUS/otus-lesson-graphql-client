import React, { forwardRef, useMemo, useImperativeHandle, useRef } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { FetchResult, useMutation } from '@apollo/client';
import { FormikConfig, useFormik } from 'formik';
import { MedicineForm, MedicineFormErrors, MedicineFormProps, MedicineFormRequired } from 'src/components/Forms';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { Button, message } from 'antd';
import { isNotDefinedString } from 'src/utils/validation';
import { Title } from 'src/components/Title';
import deepEqual from 'fast-deep-equal';
import { deepClear } from 'src/utils/deepClear';
import { MedicineInput } from 'src/server.types';
import { UPDATE_MEDICINE, UpdateMedicineData, UpdateMedicineVars } from './connection';
import s from './MedicineUpdateCompletedForm.sass';

export type MedicineUpdateCompletedFormProps = Omit<MedicineFormProps, 'formManager'> & {
  className?: string;
  onSuccess?: (result: FetchResult<UpdateMedicineData>) => void;
  title: React.ReactNode;
  submitText: React.ReactNode;
  successMessageText: React.ReactNode;
  id: string;
};

export type MedicineUpdateCompletedFormRef = {
  setValue: (value: MedicineInput) => void;
  isChanged: () => boolean;
};

const initialValues: MedicineInput = {
  name: undefined,
  heal: undefined,
};

const required: MedicineFormRequired = {
  name: true,
  heal: true,
};

export const MedicineUpdateCompletedForm = forwardRef<MedicineUpdateCompletedFormRef, MedicineUpdateCompletedFormProps>(
  ({ className, successMessageText, submitText, id, onSuccess, title, ...props }, ref) => {
    const { t } = useTranslation();
    const [update, { loading }] = useMutation<UpdateMedicineData, UpdateMedicineVars>(UPDATE_MEDICINE);

    const { onSubmit, validate } = useMemo<Pick<FormikConfig<MedicineInput>, 'onSubmit' | 'validate'>>(() => {
      const { catcher } = createErrorHandlers<keyof MedicineInput>((code, _, error) => {
        if (code === null) {
          message.error(t(`errors.${error.message}`));
        } else {
          message.error(t(`errors.${code}`));
        }
      });
      return {
        onSubmit: (values, { resetForm }) => {
          update({ variables: { id, input: values as UpdateMedicineVars['input'] } })
            .then((res) => {
              onSuccess?.(res);
              resetForm();
              message.success(successMessageText);
            })
            .catch(catcher);
        },
        validate: (values) => {
          const errors = {} as MedicineFormErrors;
          if (isNotDefinedString(values.name)) {
            errors.name = t(`errors.is_required`);
          }
          if (!values.heal?.length) {
            errors.heal = t(`errors.is_required`);
          }
          return errors;
        },
      };
    }, [id, t, update, onSuccess, successMessageText]);

    const formManager = useFormik<MedicineInput>({
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
        <MedicineForm required={required} formManager={formManager} {...props} />
        <Button type="primary" loading={loading} onClick={submitForm}>
          {submitText}
        </Button>
      </div>
    );
  }
);
