import React from 'react';
import cn from 'clsx';
import { Medicine } from 'src/server.types';
import { MedicineDraggingCard } from 'src/components/MedicineDraggingCard';
import s from './MedicineDraggingCards.sass';

export type MedicineDraggingCardsProps = {
  className?: string;
  value: Medicine[];
  empty?: React.ReactNode;
};

export const MedicineDraggingCards = ({ className, empty, value }: MedicineDraggingCardsProps) => (
  <div className={cn(s.root, className)}>
    {value?.length ? value.map((item) => <MedicineDraggingCard value={item} key={item.id} />) : empty}
  </div>
);
