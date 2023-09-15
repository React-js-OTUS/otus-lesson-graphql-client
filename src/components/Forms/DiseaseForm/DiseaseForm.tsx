import React, { memo } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { DiseaseFormProps, DiseaseFormRequired } from './types';
import { NameField } from './NameField';
import { DescField } from './DescField';
import { TypeField } from './TypeField';
import s from './DiseaseForm.sass';

const defaultRequired: DiseaseFormRequired = {
  name: true,
  type: true,
  desc: true,
};

export const DiseaseForm = memo<DiseaseFormProps>(
  ({ className, formManager, required = defaultRequired, formElement, autoFocusElement, disabled }) => {
    const {
      values,
      touched,
      errors,
      submitCount,
      handleBlur,
      handleSubmit,
      handleChange,
      setFieldTouched,
      setFieldValue,
      submitForm,
    } = formManager;
    const { t } = useTranslation();

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <NameField
          required={required.name}
          title={t(`forms.DiseaseForm.name.title`)}
          placeholder={t(`forms.DiseaseForm.name.placeholder`)}
          onPressEnter={submitForm}
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.name}
          errors={errors?.name}
          submitCount={submitCount}
          touched={touched?.name}
          disabled={disabled}
        />
        <DescField
          required={required.desc}
          title={t(`forms.DiseaseForm.desc.title`)}
          placeholder={t(`forms.DiseaseForm.desc.placeholder`)}
          onPressEnter={submitForm}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.desc}
          errors={errors?.desc}
          submitCount={submitCount}
          touched={touched?.desc}
          disabled={disabled}
        />
        <TypeField
          required={required.type}
          title={t(`forms.DiseaseForm.type.title`)}
          placeholder={t(`forms.DiseaseForm.type.placeholder`)}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          value={values?.type}
          errors={errors?.type as string}
          submitCount={submitCount}
          touched={touched?.type}
          disabled={disabled}
        />
      </form>
    );
  }
);

DiseaseForm.displayName = 'DiseaseForm';
