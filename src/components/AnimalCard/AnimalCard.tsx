import React, { FC } from 'react';
import cn from 'clsx';
import { Animal } from 'src/server.types';
import s from './AnimalCard.sass';

export type AnimalCardProps = {
  className?: string;
  value: Animal;
};

export const AnimalCard: FC<AnimalCardProps> = ({ className, value }) => (
  <div className={cn(s.root, className)}>
    <div>{`${value.__typename}: ${value.name || value.id}`}</div>
  </div>
);
