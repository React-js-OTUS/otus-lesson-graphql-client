import { gql } from '@apollo/client';
import { Mutation, MutationAddAnimalArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const ADD_ANIMAL = gql`
  mutation addAnimal($input: AnimalInput!) {
    addAnimal(input: $input) {
      ... on Cat {
        id
      }
      ... on Dog {
        id
      }
      ... on Bird {
        id
      }
    }
  }
`;

export type AddAnimalData = Pick<Mutation, 'addAnimal'>;
export type AddAnimalVars = MutationAddAnimalArgs;
export const extractAddAnimal = (data: AddAnimalData): Mutation['addAnimal'] => get('addAnimal', data);
