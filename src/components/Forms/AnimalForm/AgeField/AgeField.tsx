import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'src/components/FormItem';
import { getFieldCallbacks, getValidates } from 'src/utils/validation';
import { IntInput } from 'src/components/Inputs';
import { AnimalFormProps, AnimalFormValues, FormHandlers } from '../types';
import s from './AgeField.sass';

export type AgeFieldProps = Pick<AnimalFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: AnimalFormValues['age'];
  setFieldValue: FormHandlers['setFieldValue'];
  setFieldTouched: FormHandlers['setFieldTouched'];
};

export const AgeField = memo<AgeFieldProps>(
  ({ className, setFieldValue, setFieldTouched, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { onBlur, onChange } = getFieldCallbacks('age', { setFieldTouched, setFieldValue });
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(s.root, className)}
        title={t(`forms.AnimalForm.age.title`)}
        validateStatus={validateStatus}
        help={help}
      >
        <IntInput
          min={0}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.AnimalForm.age.placeholder`)}
        />
      </FormItem>
    );
  }
);

AgeField.displayName = 'AgeField';
