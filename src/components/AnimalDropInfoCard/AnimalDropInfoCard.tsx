import React, { FC, useRef } from 'react';
import cn from 'clsx';
import { Animal, Medicine } from 'src/server.types';
import { AnimalInfoCard, AnimalInfoCardProps } from 'src/components/AnimalInfoCard';
import { useDrop } from 'react-dnd';
import s from './AnimalDropInfoCard.sass';

export type AnimalDropInfoCardProps = AnimalInfoCardProps & {
  dndName: string;
  onTake: (animal: Animal, medicine: Medicine) => void;
  canDrop: (animal: Animal, medicine: Medicine) => boolean;
};

export type AnimalDropInfoCardRef = HTMLDivElement;

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

  const [{ isOver, _canDrop }, drop] = useDrop(() => ({
    drop: (item: Medicine) => onTake(valueCopy.current, item),
    canDrop: (item: Medicine) => canDrop(valueCopy.current, item),
    accept: dndName,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      _canDrop: monitor.canDrop(),
    }),
  }));

  if (!value) return null;

  return (
    <AnimalInfoCard
      ref={drop}
      {...props}
      value={value}
      className={cn(s.root, isOver && s.isOver, _canDrop && s.canDrop, className)}
    />
  );
};
