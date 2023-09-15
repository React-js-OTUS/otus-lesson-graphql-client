import React, { FC } from 'react';
import cn from 'clsx';
import { Disease } from 'src/server.types';
import { DiseaseEditingCard } from 'src/components/DiseaseEditingCard';
import s from './DiseasesEditingCards.sass';

export type DiseasesEditingCardsProps = {
  className?: string;
  value: Disease[];
  empty?: React.ReactNode;
};

export const DiseasesEditingCards: FC<DiseasesEditingCardsProps> = ({ className, value, empty }) => (
  <div className={cn(s.root, className)}>
    {value?.length ? value.map((item) => <DiseaseEditingCard value={item} key={item.id} />) : empty}
  </div>
);
