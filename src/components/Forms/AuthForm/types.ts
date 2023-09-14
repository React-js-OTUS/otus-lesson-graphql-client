import { FormProps } from 'src/components/Forms/types';
import { SignUpVars } from 'src/screens/AuthScreen/connections';

export type AuthFormValues = SignUpVars;

export type AuthFormErrors = Record<keyof AuthFormValues, string>;
export type AuthFormTouched = Record<keyof AuthFormValues, boolean>;

export type AuthFormProps = FormProps<AuthFormValues>;
