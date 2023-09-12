import React, { FC } from 'react';
import cn from 'clsx';
import { User } from 'src/server.types';
import { UserCart } from '../UserCart';
import s from './UsersPanel.sass';

export type UsersPanelProps = {
  className?: string;
  value: User[];
};

export const UsersPanel: FC<UsersPanelProps> = ({ className, value }) => (
  <div className={cn(s.root, className)}>
    {value?.map((item) => (
      <UserCart key={item.id} value={item} />
    ))}
  </div>
);
