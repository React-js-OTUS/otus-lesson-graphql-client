import { FormProps } from 'src/components/Forms/types';
import { Profile } from 'src/server.types';

export type ProfileFormValues = Pick<Profile, 'nickname'>;

export type ProfileFormErrors = Record<keyof ProfileFormValues, string>;
export type ProfileFormTouched = Record<keyof ProfileFormValues, boolean>;

export type ProfileFormProps = FormProps<ProfileFormValues>;
