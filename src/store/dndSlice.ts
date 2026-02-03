import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DragItem } from 'src/dnd/types';

type DndState = {
  activeItem: DragItem | null;
  activeOverId: string | null;
  isAllowed: boolean;
};

const initialState: DndState = {
  activeItem: null,
  activeOverId: null,
  isAllowed: false,
};

const dndSlice = createSlice({
  name: 'dnd',
  initialState,
  reducers: {
    dragStart(state, action: PayloadAction<DragItem | null>) {
      state.activeItem = action.payload;
    },
    dragOver(
      state,
      action: PayloadAction<{ overId: string | null; isAllowed: boolean }>
    ) {
      state.activeOverId = action.payload.overId;
      state.isAllowed = action.payload.isAllowed;
    },
    dragEnd(state) {
      state.activeItem = null;
      state.activeOverId = null;
      state.isAllowed = false;
    },
  },
});

export const { dragStart, dragOver, dragEnd } = dndSlice.actions;
export const dndReducer = dndSlice.reducer;
