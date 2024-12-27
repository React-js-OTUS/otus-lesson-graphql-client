import { gql } from '@apollo/client';
import { Mutation } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const TO_HEAL_ANIMAL = gql`
  mutation toHealAnimal($id: ID!, $diseaseIds: [ID!]) {
    updateAnimal(id: $id, input: { diseaseIds: $diseaseIds }, partial: true) {
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

export type ToHealAnimalData = Pick<Mutation, 'updateAnimal'>;
export type ToHealAnimalVars = {
  id: string;
  diseaseIds: string[];
};
export const extractUpdateAnimal = (data: ToHealAnimalData): Mutation['updateAnimal'] => get('updateAnimal', data);
