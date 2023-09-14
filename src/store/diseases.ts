import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { Disease } from 'src/server.types';
import { RootState } from './index';

export const diseasesSlice = createSlice<
  Disease[],
  {
    set: CaseReducer<Disease[], PayloadAction<Disease[]>>;
    update: CaseReducer<Disease[], PayloadAction<Disease>>;
    remove: CaseReducer<Disease[], PayloadAction<Disease>>;
  },
  'diseases'
>({
  name: 'diseases',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<Disease[]>) => action.payload,
    update: (items, action) => {
      if (!items || !action.payload) return;
      const item = action.payload;
      const index = items.findIndex((i) => i.id === item.id);
      if (index > -1) {
        items[index] = item;
      } else {
        items.push(item);
      }
    },
    remove: (items, action) => {
      if (!items || !action.payload) return;
      return items.filter((i) => i.id !== action.payload.id);
    },
  },
});

export const diseasesActions = diseasesSlice.actions;

export const diseasesSelectors = {
  get: (state: RootState): RootState['diseases'] => state.diseases,
};

export const diseases = diseasesSlice.reducer;
