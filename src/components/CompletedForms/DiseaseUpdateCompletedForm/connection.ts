import { gql } from '@apollo/client';
import { Mutation, MutationUpdateDiseaseArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const UPDATE_DISEASE = gql`
  mutation updateDisease($id: ID!, $input: DiseaseInput!) {
    updateDisease(id: $id, input: $input) {
      id
    }
  }
`;

export type UpdateDiseaseData = Pick<Mutation, 'updateDisease'>;
export type UpdateDiseaseVars = Omit<MutationUpdateDiseaseArgs, 'partial'>;
export const extractUpdateDisease = (data: UpdateDiseaseData): Mutation['updateDisease'] => get('updateDisease', data);
