import React, { FC, useRef } from 'react';
import cn from 'clsx';
import { Animal, Medicine } from 'src/server.types';
import { AnimalInfoCard, AnimalInfoCardProps } from 'src/components/AnimalInfoCard';
import s from './AnimalDropInfoCard.sass';

export type AnimalDropInfoCardProps = AnimalInfoCardProps & {
  dndName: string;
  onTake: (animal: Animal, medicine: Medicine) => void;
  canDrop: (animal: Animal, medicine: Medicine) => boolean;
};

export const AnimalDropInfoCard: FC<AnimalDropInfoCardProps> = ({
  className,
  value,
  canDrop,
  onTake,
  dndName,
  ...props
}) => {
  const valueCopy = useRef(value);
  valueCopy.current = value;

  if (!value) return null;

  return <AnimalInfoCard {...props} value={value} className={cn(s.root, className)} />;
};
