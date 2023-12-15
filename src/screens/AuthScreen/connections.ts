import { gql } from '@apollo/client';
import { ProfileMutationsSigninArgs, AuthResult, ProfileMutationsSignupArgs, Mutation } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export type SignInVars = ProfileMutationsSigninArgs;
export type SignInResponse = Pick<Mutation, 'profile'>;
export const SIGN_IN = gql``;

export const extractSignIn = (data: SignInResponse): Mutation['profile']['signin']['token'] =>
  get('profile.signin.token', data);

export type SignUpVars = ProfileMutationsSignupArgs;
export type SignUpResponse = AuthResult;
export const SIGN_UP = gql``;

export const extractSignUp = (data: SignUpResponse): Mutation['profile']['signup']['token'] =>
  get(`profile.signup.token`, data);
