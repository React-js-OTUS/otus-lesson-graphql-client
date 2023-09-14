import { gql } from '@apollo/client';
import { Query } from 'src/server.types';
import { get } from 'src/utils/unchanged';
import { ANIMAL_FRAGMENT, DISEASE_FRAGMENT, MEDICINE_FRAGMENT, PROFILE_FRAGMENT, USER_FRAGMENT } from 'src/connection';

export type GetProfileResponse = Pick<Query, 'profile' | 'animals' | 'diseases' | 'medicines' | 'users'>;
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
