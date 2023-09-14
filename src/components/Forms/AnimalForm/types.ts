import { FormProps } from 'src/components/Forms/types';
import { AnimalInput } from 'src/server.types';
import { FormikHandlers, FormikHelpers } from 'formik/dist/types';

export type AnimalFormValues = AnimalInput;

export type AnimalFormErrors = Record<keyof AnimalFormValues, string>;
export type AnimalFormTouched = Record<keyof AnimalFormValues, boolean>;

export type AnimalFormProps = FormProps<AnimalFormValues>;

export type FormHandlers = FormikHandlers & FormikHelpers<AnimalInput>;
