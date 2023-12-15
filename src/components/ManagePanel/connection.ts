import { gql } from '@apollo/client';
import { Mutation } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const SET_DOCTOR_FOR_ANIMAL = gql``;

export type SetDoctorForAnimalData = Pick<Mutation, 'updateAnimal'>;
export type SetDoctorForAnimalVars = {
  id: string;
  doctorId: string;
};
export const extractUpdateAnimal = (data: SetDoctorForAnimalData): Mutation['updateAnimal'] =>
  get('updateAnimal', data);
