import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { Medicine } from 'src/server.types';
import { RootState } from './index';

export const medicinesSlice = createSlice<
  Medicine[],
  {
    set: CaseReducer<Medicine[], PayloadAction<Medicine[]>>;
    update: CaseReducer<Medicine[], PayloadAction<Medicine>>;
    remove: CaseReducer<Medicine[], PayloadAction<Medicine>>;
  },
  'medicines'
>({
  name: 'medicines',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<Medicine[]>) => action.payload,
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
      const item = action.payload;
      const index = items.findIndex((i) => i.id === item.id);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
  },
});

export const medicinesActions = medicinesSlice.actions;

export const medicinesSelectors = {
  get: (state: RootState): RootState['medicines'] => state.medicines,
};

export const medicines = medicinesSlice.reducer;
