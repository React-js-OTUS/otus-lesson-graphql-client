import { gql } from '@apollo/client';
import { Mutation, ProfilePasswordMutationsChangeArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export type ChangePasswordVars = ProfilePasswordMutationsChangeArgs;
export type ChangePasswordResponse = Pick<Mutation, 'profile'>;
export const CHANGE_PASSWORD = gql``;

export const extractChangePassword = (data: ChangePasswordResponse): Mutation['profile']['password']['change'] =>
  get(`profile.password.change`, data);
