import React from 'react';
import { DragOverlay } from '@dnd-kit/core';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { DragOverlayContent } from './DragOverlayContent';

export function DndOverlayLayer() {
  const activeItem = useSelector(
    (state: RootState) => state.dnd.activeItem
  );

  return (
    <DragOverlay adjustScale={false}>
      <DragOverlayContent activeItem={activeItem} />
    </DragOverlay>
  );
}