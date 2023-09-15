import React, { forwardRef, useMemo, useImperativeHandle, useRef } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { FetchResult, useMutation } from '@apollo/client';
import { FormikConfig, useFormik } from 'formik';
import { MedicineForm, MedicineFormErrors, MedicineFormProps } from 'src/components/Forms';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { Button, message } from 'antd';
import { isNotDefinedString } from 'src/utils/validation';
import { Title } from 'src/components/Title';
import deepEqual from 'fast-deep-equal';
import { deepClear } from 'src/utils/deepClear';
import { MedicineInput } from 'src/server.types';
import { ADD_MEDICINE, AddMedicineData, AddMedicineVars } from './connection';
import s from './MedicineAddCompletedForm.sass';

export type MedicineAddCompletedFormProps = Omit<MedicineFormProps, 'formManager'> & {
  className?: string;
  onSuccess?: (result: FetchResult<AddMedicineData>) => void;
  title: React.ReactNode;
  submitText: React.ReactNode;
  successMessageText: React.ReactNode;
};

export type MedicineAddCompletedFormRef = {
  setValue: (value: MedicineInput) => void;
  isChanged: () => boolean;
};

const initialValues: MedicineInput = {
  name: undefined,
  heal: undefined,
};

export const MedicineAddCompletedForm = forwardRef<MedicineAddCompletedFormRef, MedicineAddCompletedFormProps>(
  ({ className, successMessageText, submitText, onSuccess, title, ...props }, ref) => {
    const { t } = useTranslation();
    const [add, { loading }] = useMutation<AddMedicineData, AddMedicineVars>(ADD_MEDICINE);

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
          add({ variables: { input: values as AddMedicineVars['input'] } })
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
    }, [t, add, onSuccess, successMessageText]);

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
        <MedicineForm formManager={formManager} {...props} />
        <Button type="primary" loading={loading} onClick={submitForm}>
          {submitText}
        </Button>
      </div>
    );
  }
);
