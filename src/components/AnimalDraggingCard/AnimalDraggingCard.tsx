import React from 'react';
import cn from 'clsx';
import { useDraggable } from '@dnd-kit/core';
import {
  AnimalEditingCard,
  AnimalEditingCardProps,
} from 'src/components/AnimalEditingCard';
import s from './AnimalDraggingCard.sass';

export const AnimalDraggingCard = (props: AnimalEditingCardProps) => {
  const { value: animal } = props;

  const { setNodeRef, listeners, attributes, isDragging } = useDraggable({
    id: animal.id,
    data: { dragItem: { type: 'animal', value: animal }},
  });

  return (
    <AnimalEditingCard
      ref={setNodeRef}
      {...props}
      {...listeners}
      {...attributes}
      className={cn(s.root, isDragging && s.isDragging)}
    />
  );
};
