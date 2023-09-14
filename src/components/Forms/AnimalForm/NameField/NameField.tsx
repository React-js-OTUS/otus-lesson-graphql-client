import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validation';
import { AnimalFormProps, AnimalFormValues, FormHandlers } from '../types';
import s from './NameField.sass';

export type NameFieldProps = Pick<AnimalFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: AnimalFormValues['name'];
  onPressEnter: () => void;
  onChange: FormHandlers['handleChange'];
  onBlur: FormHandlers['handleBlur'];
};

export const NameField = memo<NameFieldProps>(
  ({ className, onChange, onBlur, onPressEnter, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(s.root, className)}
        title={t(`forms.AnimalForm.name.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          disabled={disabled}
          ref={autoFocusElement}
          onPressEnter={onPressEnter}
          data-cy="input"
          autoFocus
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.AnimalForm.name.placeholder`)}
        />
      </FormItem>
    );
  }
);

NameField.displayName = 'NameField';
