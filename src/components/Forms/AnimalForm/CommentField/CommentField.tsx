import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validation';
import { AnimalFormProps, AnimalFormValues, FormHandlers } from '../types';
import s from './CommentField.sass';

export type CommentFieldProps = Pick<AnimalFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: AnimalFormValues['comment'];
  onPressEnter: () => void;
  onChange: FormHandlers['handleChange'];
  onBlur: FormHandlers['handleBlur'];
};

export const CommentField = memo<CommentFieldProps>(
  ({ className, onChange, onBlur, onPressEnter, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(s.root, className)}
        title={t(`forms.AnimalForm.comment.title`)}
        validateStatus={validateStatus}
        help={help}
      >
        <Input.TextArea
          disabled={disabled}
          onPressEnter={onPressEnter}
          data-cy="input"
          name="comment"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.AnimalForm.comment.placeholder`)}
        />
      </FormItem>
    );
  }
);

CommentField.displayName = 'CommentField';
