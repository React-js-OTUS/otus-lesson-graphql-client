import React, { ReactNode } from 'react';
import { DndContext } from '@dnd-kit/core';
import { DndMonitor } from './DndMonitor';
import { DndOverlayLayer } from './DndOverlayLayer';

type Props = {
  children: ReactNode;
};

export function DndProvider({ children }: Props) {
  return (
    <DndContext>
      <DndMonitor />
      {children}
      <DndOverlayLayer />
    </DndContext>
  );
}