import { gql } from '@apollo/client';
import { ANIMAL_FRAGMENT } from 'src/connection';
import { Mutation, MutationUpdateAnimalArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const SET_DOCTOR_FOR_ANIMAL = gql`
  mutation setDoctorForAnimal($id: ID!, $input: AnimalInput!) {
    updateAnimal(id: $id, input: $input) {
      ...Animal
    }
  }
  ${ANIMAL_FRAGMENT}
`;

export type SetDoctorForAnimalData = Pick<Mutation, 'updateAnimal'>;
export type SetDoctorForAnimalVars = MutationUpdateAnimalArgs;
export const extractUpdateAnimal = (data: SetDoctorForAnimalData): Mutation['updateAnimal'] =>
  get('updateAnimal', data);
