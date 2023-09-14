import { gql } from '@apollo/client';
import { USER_FRAGMENT, ANIMAL_FRAGMENT, DISEASE_FRAGMENT, MEDICINE_FRAGMENT } from 'src/connection';
import { Subscription } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const SUB_UPDATED_USER = gql`
  subscription subUpdatedUser {
    updatedUser {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;

export type SubUpdatedUserResponse = Pick<Subscription, 'updatedUser'>;

export const extractUpdatedUser = (data: SubUpdatedUserResponse): Subscription['updatedUser'] =>
  get('updatedUser', data);

export const SUB_UPDATED_ANIMAL = gql`
  subscription subUpdatedAnimal {
    updatedAnimal {
      ...Animal
    }
  }
  ${ANIMAL_FRAGMENT}
`;

export type SubUpdatedAnimalResponse = Pick<Subscription, 'updatedAnimal'>;

export const extractUpdatedAnimal = (data: SubUpdatedAnimalResponse): Subscription['updatedAnimal'] =>
  get('updatedAnimal', data);

export const SUB_UPDATED_MEDICINE = gql`
  subscription subUpdatedMedicine {
    updatedMedicine {
      ...Medicine
    }
  }
  ${MEDICINE_FRAGMENT}
`;

export type SubUpdatedMedicineResponse = Pick<Subscription, 'updatedMedicine'>;

export const extractUpdatedMedicine = (data: SubUpdatedMedicineResponse): Subscription['updatedMedicine'] =>
  get('updatedMedicine', data);

export const SUB_UPDATED_DISEASE = gql`
  subscription subUpdatedDisease {
    updatedDisease {
      ...Disease
    }
  }
  ${DISEASE_FRAGMENT}
`;

export type SubUpdatedDiseaseResponse = Pick<Subscription, 'updatedDisease'>;

export const extractUpdatedDisease = (data: SubUpdatedDiseaseResponse): Subscription['updatedDisease'] =>
  get('updatedDisease', data);

export const SUB_REMOVE_USER = gql`
  subscription subRemoveUser {
    removedUser {
      id
    }
  }
`;

export type SubRemovedUserResponse = Pick<Subscription, 'removedUser'>;

export const extractRemovedUser = (data: SubRemovedUserResponse): Subscription['removedUser'] =>
  get('removedUser', data);

export const SUB_REMOVE_ANIMAL = gql`
  subscription subRemoveAnimal {
    removedAnimal {
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

export type SubRemovedAnimalResponse = Pick<Subscription, 'removedAnimal'>;

export const extractRemovedAnimal = (data: SubRemovedAnimalResponse): Subscription['removedAnimal'] =>
  get('removedAnimal', data);

export const SUB_REMOVE_MEDICINE = gql`
  subscription subRemoveMedicine {
    removedMedicine {
      id
    }
  }
`;

export type SubRemovedMedicineResponse = Pick<Subscription, 'removedMedicine'>;

export const extractRemovedMedicine = (data: SubRemovedMedicineResponse): Subscription['removedMedicine'] =>
  get('removedMedicine', data);

export const SUB_REMOVE_DISEASE = gql`
  subscription subRemoveDisease {
    removedDisease {
      id
    }
  }
`;

export type SubRemovedDiseaseResponse = Pick<Subscription, 'removedDisease'>;

export const extractRemovedDisease = (data: SubRemovedDiseaseResponse): Subscription['removedDisease'] =>
  get('removedDisease', data);
