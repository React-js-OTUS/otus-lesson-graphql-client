import { gql } from '@apollo/client';
import { Mutation, MutationUpdateAnimalArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const SET_DOCTOR_FOR_ANIMAL = gql`
  mutation setDoctorForAnimal($id: ID!, $input: AnimalUpdateInput!) {
    updateAnimal(id: $id, input: $input, partial: true) {
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

export type SetDoctorForAnimalData = Pick<Mutation, 'updateAnimal'>;
export type SetDoctorForAnimalVars = MutationUpdateAnimalArgs;
export const extractUpdateAnimal = (data: SetDoctorForAnimalData): Mutation['updateAnimal'] =>
  get('updateAnimal', data);
