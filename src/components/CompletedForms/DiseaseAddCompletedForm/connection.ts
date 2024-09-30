import { gql } from '@apollo/client';
import { Mutation, MutationAddDiseaseArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const ADD_DISEASE = gql`
  mutation AddDisease($input: DiseaseInput!) {
    addDisease(input: $input) {
      desc
      id
      name
      type
    }
  }
`;

export type AddDiseaseData = Pick<Mutation, 'addDisease'>;
export type AddDiseaseVars = MutationAddDiseaseArgs;
export const extractAddDisease = (data: AddDiseaseData): Mutation['addDisease'] => get('addDisease', data);
