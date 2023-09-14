import React, { FC } from 'react';
import cn from 'clsx';
import { AnimalCard, AnimalCardProps } from 'src/components/AnimalCard';
import { useDrag } from 'react-dnd';
import s from './AnimalDraggingCard.sass';

export type AnimalDraggingCardProps = AnimalCardProps & {
  dndName: string;
};

export const AnimalDraggingCard: FC<AnimalDraggingCardProps> = ({ dndName, className, ...props }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dndName,
    item: props.value,
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return <AnimalCard className={cn(s.root, isDragging && s.dragging, className)} {...props} ref={drag} />;
};
