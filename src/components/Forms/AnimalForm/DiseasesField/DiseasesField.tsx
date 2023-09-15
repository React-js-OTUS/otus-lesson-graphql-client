import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'src/components/FormItem';
import { getFieldCallbacks, getValidates } from 'src/utils/validation';
import { DiseasesSelect } from 'src/components/Selections/DiseasesSelect';
import { Disease } from 'src/server.types';
import { AnimalFormProps, AnimalFormValues, FormHandlers } from '../types';
import s from './DiseasesField.sass';

export type DiseasesFieldProps = Pick<AnimalFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  items: Disease[];
  value: AnimalFormValues['diseaseIds'];
  setFieldValue: FormHandlers['setFieldValue'];
  setFieldTouched: FormHandlers['setFieldTouched'];
};

export const DiseasesField = memo<DiseasesFieldProps>(
  ({ className, setFieldValue, setFieldTouched, touched, items, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { onBlur, onChange } = getFieldCallbacks('diseaseIds', { setFieldTouched, setFieldValue });
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        required
        className={cn(s.root, className)}
        title={t(`forms.AnimalForm.diseases.title`)}
        validateStatus={validateStatus}
        help={help}
      >
        <DiseasesSelect
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          items={items}
          placeholder={t(`forms.AnimalForm.diseases.placeholder`)}
        />
      </FormItem>
    );
  }
);

DiseasesField.displayName = 'DiseasesField';
