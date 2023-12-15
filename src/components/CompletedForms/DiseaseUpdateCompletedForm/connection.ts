import { gql } from '@apollo/client';
import { Mutation, MutationUpdateDiseaseArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const UPDATE_DISEASE = gql``;

export type UpdateDiseaseData = Pick<Mutation, 'updateDisease'>;
export type UpdateDiseaseVars = Omit<MutationUpdateDiseaseArgs, 'partial'>;
export const extractUpdateDisease = (data: UpdateDiseaseData): Mutation['updateDisease'] => get('updateDisease', data);
