import React, { FC } from 'react';
import cn from 'clsx';
import { Animal, User } from 'src/server.types';
import { AnimalCard } from 'src/components/AnimalCard';
import s from './UserCart.sass';

export type UserCartProps = {
  className?: string;
  value: User;
  animals?: Animal[];
};

export const UserCart: FC<UserCartProps> = ({ className, value, animals }) => {
  if (!value) return null;
  return (
    <div className={cn(s.root, className)}>
      <div className={s.title}>{value.nickname || value.id}</div>
      <div className={s.body}>
        {animals?.map((item: Animal) => (
          <AnimalCard value={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
