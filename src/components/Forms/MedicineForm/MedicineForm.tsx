import React, { memo } from 'react';
import cn from 'clsx';
import { useSelector } from 'react-redux';
import { diseasesSelectors } from 'src/store/diseases';
import { DiseasesField } from 'src/components/Forms/AnimalForm/DiseasesField';
import { useTranslation } from 'react-i18next';
import { MedicineFormProps, MedicineFormRequired } from './types';
import { NameField } from './NameField';
import s from './MedicineForm.sass';

const defaultRequired: MedicineFormRequired = {
  name: true,
  heal: true,
};

export const MedicineForm = memo<MedicineFormProps>(
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

    const diseases = useSelector(diseasesSelectors.get);

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <NameField
          required={required.name}
          title={t(`forms.MedicineForm.name.title`)}
          placeholder={t(`forms.MedicineForm.name.placeholder`)}
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
        <DiseasesField
          required={required.heal}
          title={t(`forms.MedicineForm.heal.title`)}
          placeholder={t(`forms.MedicineForm.heal.placeholder`)}
          items={diseases}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          value={values?.heal}
          errors={errors?.heal as string}
          submitCount={submitCount}
          touched={touched?.heal}
          disabled={disabled}
        />
      </form>
    );
  }
);

MedicineForm.displayName = 'EmailForm';
