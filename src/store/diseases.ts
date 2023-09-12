import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { Disease } from 'src/server.types';
import { RootState } from './index';

export const diseasesSlice = createSlice<
  Disease[],
  { set: CaseReducer<Disease[], PayloadAction<Disease[]>> },
  'diseases'
>({
  name: 'diseases',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<Disease[]>) => action.payload,
  },
});

export const diseasesActions = diseasesSlice.actions;

export const diseasesSelectors = {
  get: (state: RootState): RootState['diseases'] => state.diseases,
};

export const diseases = diseasesSlice.reducer;
