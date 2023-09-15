import React, { FC } from 'react';
import cn from 'clsx';
import { Medicine } from 'src/server.types';
import { MedicineEditingCard } from 'src/components/MedicineEditingCard';
import s from './MedicinesEditingCards.sass';

export type MedicinesEditingCardsProps = {
  className?: string;
  value: Medicine[];
  empty?: React.ReactNode;
};

export const MedicinesEditingCards: FC<MedicinesEditingCardsProps> = ({ className, value, empty }) => (
  <div className={cn(s.root, className)}>
    {value?.length ? value.map((item) => <MedicineEditingCard value={item} key={item.id} />) : empty}
  </div>
);
