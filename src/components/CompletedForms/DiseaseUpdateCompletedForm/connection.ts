import { gql } from '@apollo/client';
import { Mutation, MutationUpdateDiseaseArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const UPDATE_DISEASE = gql`
  mutation UpdateDisease($updateDiseaseId: ID!, $input: DiseaseInput!) {
    updateDisease(id: $updateDiseaseId, input: $input) {
      id
      name
      type
    }
  }
`;

export type UpdateDiseaseData = Pick<Mutation, 'updateDisease'>;
export type UpdateDiseaseVars = Omit<MutationUpdateDiseaseArgs, 'partial'>;
export const extractUpdateDisease = (data: UpdateDiseaseData): Mutation['updateDisease'] => get('updateDisease', data);
