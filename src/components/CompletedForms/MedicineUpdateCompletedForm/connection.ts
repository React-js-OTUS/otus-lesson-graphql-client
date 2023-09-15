import { gql } from '@apollo/client';
import { Mutation, MutationUpdateMedicineArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const UPDATE_MEDICINE = gql`
  mutation updateMedicine($id: ID!, $input: MedicineInput!) {
    updateMedicine(id: $id, input: $input) {
      id
    }
  }
`;

export type UpdateMedicineData = Pick<Mutation, 'updateMedicine'>;
export type UpdateMedicineVars = Omit<MutationUpdateMedicineArgs, 'partial'>;
export const extractUpdateMedicine = (data: UpdateMedicineData): Mutation['updateMedicine'] =>
  get('updateMedicine', data);
