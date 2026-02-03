import React from 'react';
import cn from 'clsx';
import { Animal, User } from 'src/server.types';
import { UserCart } from '../UserCart';
import s from './UsersPanel.sass';

export type UsersPanelProps = {
  className?: string;
  value: User[];
  animals?: Animal[];
  onTake: (doctor: User, animal: Animal) => void;
  canDrop: (doctor: User, animal: Animal) => boolean;
};

export const UsersPanel = ({ className, value, animals, canDrop, onTake }: UsersPanelProps) => (
  <div className={cn(s.root, className)}>
    {value?.map((item) => (
      <UserCart
        canDrop={canDrop}
        key={item.id}
        value={item}
        animals={animals.filter((animal) => animal.doctor?.id === item.id)}
        onTake={onTake}
      />
    ))}
  </div>
);
