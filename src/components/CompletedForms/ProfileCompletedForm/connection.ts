import { gql } from '@apollo/client';
import { Mutation, ProfileMutationsUpdateArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export type UpdateProfileVars = ProfileMutationsUpdateArgs;
export type UpdateProfileResponse = Pick<Mutation, 'profile'>;
export const UPDATE_PROFILE = gql``;

export const extractUpdateProfile = (data: UpdateProfileResponse): Mutation['profile']['update'] =>
  get('profile.update', data);
