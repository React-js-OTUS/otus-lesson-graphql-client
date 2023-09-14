import React, { FC } from 'react';
import cn from 'clsx';
import { Animal } from 'src/server.types';
import { AnimalIcon } from 'src/components/AnimalIcon';
import s from './AnimalCard.sass';

export type AnimalCardProps = {
  className?: string;
  value: Animal;
};

export const AnimalCard: FC<AnimalCardProps> = ({ className, value }) => {
  if (!value) return null;
  return (
    <div className={cn(s.root, className)}>
      <AnimalIcon value={value.__typename} />
      <div>{value.name || value.id}</div>
    </div>
  );
};
