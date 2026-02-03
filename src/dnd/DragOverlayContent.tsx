import React from 'react';
import { DragItem } from './types';
import { AnimalEditingCard } from 'src/components/AnimalEditingCard';
import { MedicineEditingCard } from 'src/components/MedicineEditingCard';

const overlayRenderers = {
  animal: (item: Extract<DragItem, { type: 'animal' }>) => (
    <AnimalEditingCard value={item.value} />
  ),
  medicine: (item: Extract<DragItem, { type: 'medicine' }>) => (
    <MedicineEditingCard value={item.value} />
  ),
}

export function DragOverlayContent({
  activeItem,
}: {
  activeItem: DragItem | null;
}) {
  if (!activeItem) return null;

  if (activeItem.type in overlayRenderers) {
    const renderer = overlayRenderers[activeItem.type] as (
      item: typeof activeItem
    ) => JSX.Element;
    return renderer(activeItem);
  }

  return null;
}
