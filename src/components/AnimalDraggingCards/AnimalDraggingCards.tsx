import React, { FC } from 'react';
import cn from 'clsx';
import { Animal } from 'src/server.types';
import { AnimalDraggingCard } from 'src/components/AnimalDraggingCard';
import s from './AnimalDraggingCards.sass';

export type AnimalDraggingCardsProps = {
  className?: string;
  value: Animal[];
  dndName: string;
  empty?: React.ReactNode;
};

export const AnimalDraggingCards: FC<AnimalDraggingCardsProps> = ({ className, dndName, empty, value }) => (
  <div className={cn(s.root, className)}>
    {value?.length ? value.map((item) => <AnimalDraggingCard dndName={dndName} value={item} key={item.id} />) : empty}
  </div>
);
