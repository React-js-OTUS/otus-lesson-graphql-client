import React, { FC } from 'react';
import cn from 'clsx';
import { AnimalEditingCardProps, AnimalEditingCard } from 'src/components/AnimalEditingCard';
import { useDrag } from 'react-dnd';
import s from './AnimalDraggingCard.sass';

export type AnimalDraggingCardProps = AnimalEditingCardProps & {
  dndName: string;
};

export const AnimalDraggingCard: FC<AnimalDraggingCardProps> = ({ dndName, className, ...props }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dndName,
    item: props.value,
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return <AnimalEditingCard className={cn(s.root, isDragging && s.isDragging, className)} {...props} ref={drag} />;
};
