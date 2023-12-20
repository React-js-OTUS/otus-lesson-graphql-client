import { gql } from '@apollo/client';
import { Query, Subscription } from 'src/server.types';
import { ANIMAL_FRAGMENT, DISEASE_FRAGMENT, MEDICINE_FRAGMENT, PROFILE_FRAGMENT, USER_FRAGMENT } from 'src/connection';
import { get } from 'src/utils/unchanged';

export type GetInitialDataResponse = Pick<Query, 'profile' | 'animals' | 'diseases' | 'medicines' | 'users'>;
export const GET_INITIAL_DATA = gql`
  query getInitialData {
    profile {
      ...Profile
    }
    users {
      ...User
    }
    medicines {
      ...Medicine
    }
    diseases {
      ...Disease
    }
    animals {
      ...Animal
    }
  }
  ${USER_FRAGMENT}
  ${PROFILE_FRAGMENT}
  ${ANIMAL_FRAGMENT}
  ${MEDICINE_FRAGMENT}
  ${DISEASE_FRAGMENT}
`;

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

export const SUB_ADDED_USER = gql`
  subscription subAddedUser {
    addedUser {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;

export type SubAddedUserResponse = Pick<Subscription, 'addedUser'>;

export const extractAddedUser = (data: SubAddedUserResponse): Subscription['addedUser'] => get('addedUser', data);

export const SUB_ADDED_ANIMAL = gql`
  subscription subAddedAnimal {
    addedAnimal {
      ...Animal
    }
  }
  ${ANIMAL_FRAGMENT}
`;

export type SubAddedAnimalResponse = Pick<Subscription, 'addedAnimal'>;

export const extractAddedAnimal = (data: SubAddedAnimalResponse): Subscription['addedAnimal'] =>
  get('addedAnimal', data);

export const SUB_ADDED_MEDICINE = gql`
  subscription subAddedMedicine {
    addedMedicine {
      ...Medicine
    }
  }
  ${MEDICINE_FRAGMENT}
`;

export type SubAddedMedicineResponse = Pick<Subscription, 'addedMedicine'>;

export const extractAddedMedicine = (data: SubAddedMedicineResponse): Subscription['addedMedicine'] =>
  get('addedMedicine', data);

export const SUB_ADDED_DISEASE = gql`
  subscription subAddedDisease {
    addedDisease {
      ...Disease
    }
  }
  ${DISEASE_FRAGMENT}
`;

export type SubAddedDiseaseResponse = Pick<Subscription, 'addedDisease'>;

export const extractAddedDisease = (data: SubAddedDiseaseResponse): Subscription['addedDisease'] =>
  get('addedDisease', data);

export const SUB_REMOVED_USER = gql`
  subscription subRemovedUser {
    removedUser {
      id
    }
  }
`;

export type SubRemovedUserResponse = Pick<Subscription, 'removedUser'>;

export const extractRemovedUser = (data: SubRemovedUserResponse): Subscription['removedUser'] =>
  get('removedUser', data);

export const SUB_REMOVED_ANIMAL = gql`
  subscription subRemovedAnimal {
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

export const SUB_REMOVED_MEDICINE = gql`
  subscription subRemovedMedicine {
    removedMedicine {
      id
    }
  }
`;

export type SubRemovedMedicineResponse = Pick<Subscription, 'removedMedicine'>;

export const extractRemovedMedicine = (data: SubRemovedMedicineResponse): Subscription['removedMedicine'] =>
  get('removedMedicine', data);

export const SUB_REMOVED_DISEASE = gql`
  subscription subRemovedDisease {
    removedDisease {
      id
    }
  }
`;

export type SubRemovedDiseaseResponse = Pick<Subscription, 'removedDisease'>;

export const extractRemovedDisease = (data: SubRemovedDiseaseResponse): Subscription['removedDisease'] =>
  get('removedDisease', data);
