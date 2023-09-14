import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { Animal } from 'src/server.types';
import { RootState } from './index';

export const animalsSlice = createSlice<
  Animal[],
  {
    set: CaseReducer<Animal[], PayloadAction<Animal[]>>;
    update: CaseReducer<Animal[], PayloadAction<Animal>>;
    remove: CaseReducer<Animal[], PayloadAction<Animal>>;
  },
  'animals'
>({
  name: 'animals',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<Animal[]>) => action.payload,
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

export const animalsActions = animalsSlice.actions;

export const animalsSelectors = {
  get: (state: RootState): RootState['animals'] => state.animals,
};

export const animals = animalsSlice.reducer;
