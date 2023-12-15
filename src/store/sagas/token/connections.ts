import { gql } from '@apollo/client';
import { Query } from 'src/server.types';

export type GetProfileResponse = Pick<Query, 'profile' | 'animals' | 'diseases' | 'medicines' | 'users'>;
export const GET_INITIAL_DATA = gql``;
