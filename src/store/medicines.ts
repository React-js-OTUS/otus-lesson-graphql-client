import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { Medicine } from 'src/server.types';
import { RootState } from './index';

export const medicinesSlice = createSlice<
  Medicine[],
  { set: CaseReducer<Medicine[], PayloadAction<Medicine[]>> },
  'medicines'
>({
  name: 'medicines',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<Medicine[]>) => action.payload,
  },
});

export const medicinesActions = medicinesSlice.actions;

export const medicinesSelectors = {
  get: (state: RootState): RootState['medicines'] => state.medicines,
};

export const medicines = medicinesSlice.reducer;
