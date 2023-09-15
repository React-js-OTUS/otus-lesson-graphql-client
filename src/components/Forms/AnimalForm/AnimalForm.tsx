import React, { memo } from 'react';
import cn from 'clsx';
import { CommentField } from 'src/components/Forms/AnimalForm/CommentField';
import { AnimalTypeField } from 'src/components/Forms/AnimalForm/AnimalTypeField';
import { AgeField } from 'src/components/Forms/AnimalForm/AgeField';
import { useSelector } from 'react-redux';
import { diseasesSelectors } from 'src/store/diseases';
import { DiseasesField } from 'src/components/Forms/AnimalForm/DiseasesField';
import { useTranslation } from 'react-i18next';
import { AnimalFormProps } from './types';
import { NameField } from './NameField';
import s from './AnimalForm.sass';

export const AnimalForm = memo<AnimalFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
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
          title={t(`forms.AnimalForm.name.title`)}
          placeholder={t(`forms.AnimalForm.name.placeholder`)}
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
        <AnimalTypeField
          title={t(`forms.AnimalForm.type.title`)}
          placeholder={t(`forms.AnimalForm.type.placeholder`)}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          value={values?.type}
          errors={errors?.type}
          submitCount={submitCount}
          touched={touched?.type}
          disabled={disabled}
        />
        <DiseasesField
          title={t(`forms.AnimalForm.diseases.title`)}
          placeholder={t(`forms.AnimalForm.diseases.placeholder`)}
          items={diseases}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          value={values?.diseaseIds}
          errors={errors?.diseaseIds as string}
          submitCount={submitCount}
          touched={touched?.diseaseIds}
          disabled={disabled}
        />
        <AgeField
          title={t(`forms.AnimalForm.age.title`)}
          placeholder={t(`forms.AnimalForm.age.placeholder`)}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          value={values?.age}
          errors={errors?.age}
          submitCount={submitCount}
          touched={touched?.age}
          disabled={disabled}
        />
        <CommentField
          title={t(`forms.AnimalForm.comment.title`)}
          placeholder={t(`forms.AnimalForm.comment.placeholder`)}
          onPressEnter={submitForm}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.comment}
          errors={errors?.comment}
          submitCount={submitCount}
          touched={touched?.comment}
          disabled={disabled}
        />
      </form>
    );
  }
);

AnimalForm.displayName = 'EmailForm';
