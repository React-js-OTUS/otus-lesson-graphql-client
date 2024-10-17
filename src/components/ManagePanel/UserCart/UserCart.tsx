import React, { FC } from 'react';
import cn from 'clsx';
import { Animal, User } from 'src/server.types';
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
  if (!value) return null;
  return (
    <div className={cn(s.root, className)}>
      <div className={s.title}>{value.nickname || value.id}</div>
      <div className={cn(s.body)}>
        {animals?.map((item: Animal) => (
          <AnimalEditingCard value={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
