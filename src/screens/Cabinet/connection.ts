import { gql } from '@apollo/client';
import { Mutation } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const TO_HEAL_ANIMAL = gql``;

export type ToHealAnimalData = Pick<Mutation, 'updateAnimal'>;
export type ToHealAnimalVars = {
  id: string;
  diseaseIds: string[];
};
export const extractUpdateAnimal = (data: ToHealAnimalData): Mutation['updateAnimal'] => get('updateAnimal', data);
