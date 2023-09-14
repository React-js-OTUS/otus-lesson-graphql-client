import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { User } from 'src/server.types';
import { RootState } from './index';

export const usersSlice = createSlice<
  User[],
  {
    set: CaseReducer<User[], PayloadAction<User[]>>;
    update: CaseReducer<User[], PayloadAction<User>>;
    remove: CaseReducer<User[], PayloadAction<User>>;
  },
  'users'
>({
  name: 'users',
  initialState: null,
  reducers: {
    set: (_, action) => action.payload,
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

export const usersActions = usersSlice.actions;

export const usersSelectors = {
  get: (state: RootState): RootState['users'] => state.users,
};

export const users = usersSlice.reducer;
