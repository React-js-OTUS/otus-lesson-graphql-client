import React, { FC } from 'react';
import cn from 'clsx';
import { Animal } from 'src/server.types';
import { AnimalCard } from 'src/components/AnimalCard';
import s from './AnimalCards.sass';

export type AnimalCardsProps = {
  className?: string;
  value: Animal[];
  activeId?: string;
  onClick?: (value: Animal) => void;
  empty?: React.ReactNode;
};

export const AnimalCards: FC<AnimalCardsProps> = ({ className, value, activeId, onClick, empty }) => (
  <div className={cn(s.root, className)}>
    {value?.length
      ? value.map((item) => (
          <AnimalCard
            className={cn(s.item, activeId === item.id && s.active)}
            onClick={() => onClick(item)}
            value={item}
            key={item.id}
          />
        ))
      : empty}
  </div>
);
