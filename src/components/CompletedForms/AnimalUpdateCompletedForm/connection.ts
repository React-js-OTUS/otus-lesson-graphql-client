import { gql } from '@apollo/client';
import { Mutation, MutationUpdateAnimalArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const UPDATE_ANIMAL = gql``;

export type UpdateAnimalData = Pick<Mutation, 'updateAnimal'>;
export type UpdateAnimalVars = Omit<MutationUpdateAnimalArgs, 'partial'>;
export const extractUpdateAnimal = (data: UpdateAnimalData): Mutation['updateAnimal'] => get('updateAnimal', data);
