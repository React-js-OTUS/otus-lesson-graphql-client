import React from 'react';
import cn from 'clsx';
import { Animal } from 'src/server.types';
import { AnimalDraggingCard } from 'src/components/AnimalDraggingCard';
import s from './AnimalDraggingCards.sass';

export type AnimalDraggingCardsProps = {
  className?: string;
  value: Animal[];
  empty?: React.ReactNode;
};

export const AnimalDraggingCards = ({ className, empty, value }: AnimalDraggingCardsProps) => (
  <div className={cn(s.root, className)}>
    {value?.length ? value.map((item) => <AnimalDraggingCard value={item} key={item.id} />) : empty}
  </div>
);
