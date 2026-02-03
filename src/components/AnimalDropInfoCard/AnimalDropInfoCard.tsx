import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Animal, Medicine } from 'src/server.types';
import { AnimalInfoCard, AnimalInfoCardProps } from 'src/components/AnimalInfoCard';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

type Props = AnimalInfoCardProps & {
  canDrop: (animal: Animal, medicine: Medicine) => boolean;
  onTake: (animal: Animal, medicine: Medicine) => void;
};

export const AnimalDropInfoCard = ({ value, canDrop, onTake, ...props }: Props) => {
  if (!value) return null;

  const droppableId = `animal-${value.id}`;

  const activeOverId = useSelector((state: RootState) => state.dnd.activeOverId);
  const isAllowed = useSelector((state: RootState) => state.dnd.isAllowed);

  const isOver = activeOverId === droppableId;

  const { setNodeRef } = useDroppable({
    id: droppableId,
    data: { value, canDrop, onTake },
  });

  return (
    <AnimalInfoCard
      ref={setNodeRef}
      {...props}
      value={value}
      isOver={isOver}
      isAllowed={isOver && isAllowed}
    />
  );
};





