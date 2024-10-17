import React, { FC } from 'react';
import cn from 'clsx';
import { AnimalEditingCardProps, AnimalEditingCard } from 'src/components/AnimalEditingCard';
import s from './AnimalDraggingCard.sass';

export type AnimalDraggingCardProps = AnimalEditingCardProps & {
  dndName: string;
};

export const AnimalDraggingCard: FC<AnimalDraggingCardProps> = ({ dndName, className, ...props }) => (
  <AnimalEditingCard className={cn(s.root, className)} {...props} />
);
