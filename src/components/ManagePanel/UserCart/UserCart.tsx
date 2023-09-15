import React, { FC } from 'react';
import cn from 'clsx';
import { Animal, User } from 'src/server.types';
import { useDrop } from 'react-dnd';
import { AnimalEditingCard } from 'src/components/AnimalEditingCard';
import s from './UserCart.sass';

export type UserCartProps = {
  className?: string;
  dndName: string;
  value: User;
  onTake: (doctor: User, animal: Animal) => void;
  canDrop: (doctor: User, animal: Animal) => boolean;
  animals?: Animal[];
};

export const UserCart: FC<UserCartProps> = ({ className, value, animals, canDrop, dndName, onTake }) => {
  const [{ isOver, _canDrop }, drop] = useDrop(() => ({
    drop: (item: Animal) => onTake(value, item),
    canDrop: (item: Animal) => canDrop(value, item),
    accept: dndName,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      _canDrop: monitor.canDrop(),
    }),
  }));
  if (!value) return null;
  return (
    <div className={cn(s.root, className)}>
      <div className={s.title}>{value.nickname || value.id}</div>
      <div ref={drop} className={cn(s.body, isOver && s.isOver, _canDrop && s.canDrop)}>
        {animals?.map((item: Animal) => (
          <AnimalEditingCard value={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
