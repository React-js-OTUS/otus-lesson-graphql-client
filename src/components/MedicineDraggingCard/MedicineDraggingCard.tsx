import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import cn from 'clsx';
import {
  MedicineEditingCard,
  MedicineEditingCardProps,
} from 'src/components/MedicineEditingCard';
import s from './MedicineDraggingCard.sass';

export const MedicineDraggingCard = (props: MedicineEditingCardProps) => {
  const { value: medicine } = props;

  const { setNodeRef, listeners, attributes, isDragging } = useDraggable({
    id: medicine.id,
    data: {
      dragItem: {
        type: 'medicine',
        value: medicine,
      },
    },
  });

  return (
    <MedicineEditingCard
      ref={setNodeRef}
      {...props}
      {...listeners}
      {...attributes}
      className={cn(s.root, isDragging && s.isDragging)}
    />
  );
};

