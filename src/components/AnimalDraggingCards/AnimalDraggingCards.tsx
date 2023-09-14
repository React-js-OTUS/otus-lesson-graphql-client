import React, { FC } from 'react';
import cn from 'clsx';
import { Animal } from 'src/server.types';
import { AnimalDraggingCard } from 'src/components/AnimalDraggingCard';
import s from './AnimalDraggingCards.sass';

export type AnimalDraggingCardsProps = {
  className?: string;
  value: Animal[];
  dndName: string;
};

export const AnimalDraggingCards: FC<AnimalDraggingCardsProps> = ({ className, dndName, value }) => (
  <div className={cn(s.root, className)}>
    {value?.map((item) => (
      <AnimalDraggingCard dndName={dndName} value={item} key={item.id} />
    ))}
  </div>
);
