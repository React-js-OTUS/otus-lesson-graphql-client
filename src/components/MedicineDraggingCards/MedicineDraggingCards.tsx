import React, { FC } from 'react';
import cn from 'clsx';
import { Medicine } from 'src/server.types';
import { MedicineDraggingCard } from 'src/components/MedicineDraggingCard';
import s from './MedicineDraggingCards.sass';

export type MedicineDraggingCardsProps = {
  className?: string;
  value: Medicine[];
  dndName: string;
  empty?: React.ReactNode;
};

export const MedicineDraggingCards: FC<MedicineDraggingCardsProps> = ({ className, dndName, empty, value }) => (
  <div className={cn(s.root, className)}>
    {value?.length ? value.map((item) => <MedicineDraggingCard dndName={dndName} value={item} key={item.id} />) : empty}
  </div>
);
