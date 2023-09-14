import { gql } from '@apollo/client';

export const PROFILE_FRAGMENT = gql`
  fragment Profile on Profile {
    email
    id
    name
    signUpDate
  }
`;

export const USER_FRAGMENT = gql`
  fragment User on User {
    id
    name
    signUpDate
  }
`;

export const MEDICINE_FRAGMENT = gql`
  fragment Medicine on Medicine {
    id
    name
    heal
  }
`;

export const DISEASE_FRAGMENT = gql`
  fragment Disease on Disease {
    id
    name
    type
  }
`;

export const DOG_FRAGMENT = gql`
  fragment Dog on Dog {
    id
    name
    age
    comment
    doctor {
      id
    }
    diseases {
      id
    }
    updatedAt
  }
`;

export const CAT_FRAGMENT = gql`
  fragment Cat on Cat {
    id
    name
    age
    comment
    doctor {
      id
    }
    diseases {
      id
    }
    updatedAt
  }
`;
export const BIRD_FRAGMENT = gql`
  fragment Bird on Bird {
    id
    name
    age
    comment
    doctor {
      id
    }
    diseases {
      id
    }
    updatedAt
  }
`;
export const ANIMAL_FRAGMENT = gql`
  fragment Animal on Animal {
    ... on Cat {
      ...Cat
    }
    ... on Dog {
      ...Dog
    }
    ... on Bird {
      ...Bird
    }
  }
  ${DOG_FRAGMENT}
  ${CAT_FRAGMENT}
  ${BIRD_FRAGMENT}
`;
