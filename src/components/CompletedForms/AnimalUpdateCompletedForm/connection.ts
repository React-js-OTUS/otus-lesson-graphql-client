import { gql } from '@apollo/client';
import { Mutation, MutationUpdateAnimalArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const UPDATE_ANIMAL = gql`
  mutation updateAnimal($id: ID!, $input: AnimalUpdateInput!) {
    updateAnimal(id: $id, input: $input, partial: false) {
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

export type UpdateAnimalData = Pick<Mutation, 'updateAnimal'>;
export type UpdateAnimalVars = Omit<MutationUpdateAnimalArgs, 'partial'>;
export const extractUpdateAnimal = (data: UpdateAnimalData): Mutation['updateAnimal'] => get('updateAnimal', data);
