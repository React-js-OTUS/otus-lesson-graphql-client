import { FormProps } from 'src/components/Forms/types';
import { MedicineInput } from 'src/server.types';
import { FormikHandlers, FormikHelpers } from 'formik/dist/types';

export type MedicineFormValues = MedicineInput;

export type MedicineFormErrors = Record<keyof MedicineFormValues, string>;
export type MedicineFormTouched = Record<keyof MedicineFormValues, boolean>;

export type MedicineFormRequired = Record<keyof MedicineFormValues, boolean>;

export type MedicineFormProps = FormProps<MedicineFormValues> & {
  required?: MedicineFormRequired;
};

export type FormHandlers = FormikHandlers & FormikHelpers<MedicineFormValues>;
