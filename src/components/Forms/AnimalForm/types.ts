import { FormProps } from 'src/components/Forms/types';
import { AnimalUpdateInput, AnimalAddInput } from 'src/server.types';
import { FormikHandlers, FormikHelpers } from 'formik/dist/types';

export type AnimalFormValues = AnimalUpdateInput | AnimalAddInput;

export type AnimalFormErrors = Record<keyof AnimalFormValues, string>;
export type AnimalFormTouched = Record<keyof AnimalFormValues, boolean>;

export type AnimalFormRequired = Record<keyof AnimalFormValues, boolean>;

export type AnimalFormProps = FormProps<AnimalFormValues> & {
  required?: AnimalFormRequired;
};

export type FormHandlers = FormikHandlers & FormikHelpers<AnimalUpdateInput>;
