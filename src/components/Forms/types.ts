import { InputRef } from 'antd';
import { FormikContextType } from 'formik';
import { Ref } from 'react';

export interface FormProps<Values = unknown> {
  className?: string;
  disabled?: boolean;
  formManager: FormikContextType<Values>;
  formElement?: Ref<HTMLFormElement>;
  autoFocusElement?: Ref<InputRef>;
}
