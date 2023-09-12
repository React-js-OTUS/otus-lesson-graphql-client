import { gql } from '@apollo/client';
import { Query } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export type GetProfileResponse = Pick<Query, 'profile' | 'animals' | 'diseases' | 'medicines' | 'users'>;
export const GET_INITIAL_DATA = gql`
  query getInitialData {
    profile {
      email
      id
      name
      signUpDate
    }
    users {
      id
      name
    }
    medicines {
      id
      name
      heal
    }
    diseases {
      id
      name
      type
    }
    animals {
      ... on Cat {
        age
        comment
        diseases {
          id
        }
        doctor {
          id
        }
        id
        name
        updatedAt
      }
      ... on Dog {
        age
        comment
        diseases {
          id
        }
        doctor {
          id
        }
        id
        name
        updatedAt
      }
      ... on Bird {
        age
        comment
        diseases {
          id
        }
        doctor {
          id
        }
        id
        name
        updatedAt
      }
    }
  }
`;

export const extractGetProfile = (data: GetProfileResponse): Query['profile'] => get('profile', data);
