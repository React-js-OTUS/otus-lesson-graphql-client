import { FormProps } from 'src/components/Forms/types';
import { DiseaseInput } from 'src/server.types';
import { FormikHandlers, FormikHelpers } from 'formik/dist/types';

export type DiseaseFormValues = DiseaseInput;

export type DiseaseFormErrors = Record<keyof DiseaseFormValues, string>;
export type DiseaseFormTouched = Record<keyof DiseaseFormValues, boolean>;

export type DiseaseFormRequired = Record<keyof DiseaseFormValues, boolean>;

export type DiseaseFormProps = FormProps<DiseaseFormValues> & {
  required?: DiseaseFormRequired;
};

export type FormHandlers = FormikHandlers & FormikHelpers<DiseaseFormValues>;
