import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { Animal } from 'src/server.types';
import { RootState } from './index';

export const animalsSlice = createSlice<Animal[], { set: CaseReducer<Animal[], PayloadAction<Animal[]>> }, 'animals'>({
  name: 'animals',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<Animal[]>) => action.payload,
  },
});

export const animalsActions = animalsSlice.actions;

export const animalsSelectors = {
  get: (state: RootState): RootState['animals'] => state.animals,
};

export const animals = animalsSlice.reducer;
