import { gql } from '@apollo/client';
import { Mutation, MutationAddMedicineArgs } from 'src/server.types';
import { get } from 'src/utils/unchanged';

export const ADD_MEDICINE = gql`
  mutation addMedicine($input: MedicineInput!) {
    addMedicine(input: $input) {
      id
    }
  }
`;

export type AddMedicineData = Pick<Mutation, 'addMedicine'>;
export type AddMedicineVars = MutationAddMedicineArgs;
export const extractAddMedicine = (data: AddMedicineData): Mutation['addMedicine'] => get('addMedicine', data);
