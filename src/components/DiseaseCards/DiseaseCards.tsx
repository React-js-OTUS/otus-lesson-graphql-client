import React, { FC } from 'react';
import cn from 'clsx';
import { Disease } from 'src/server.types';
import { DiseaseCard } from 'src/components/DiseaseCard';
import s from './DiseaseCards.sass';

export type DiseaseCardsProps = {
  className?: string;
  value: Disease[];
  activeId?: string;
  onClick?: (value: Disease) => void;
  empty?: React.ReactNode;
};

export const DiseaseCards: FC<DiseaseCardsProps> = ({ className, value, activeId, onClick, empty }) => (
  <div className={cn(s.root, className)}>
    {value?.length
      ? value.map((item) => (
          <DiseaseCard
            className={cn(s.item, activeId === item.id && s.active)}
            onClick={() => onClick(item)}
            value={item}
            key={item.id}
          />
        ))
      : empty}
  </div>
);
