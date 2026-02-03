import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import cn from 'clsx';
import { Animal, User } from 'src/server.types';
import { AnimalEditingCard } from 'src/components/AnimalEditingCard';
import s from './UserCart.sass';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

type Props = {
  value: User;
  animals?: Animal[];
  canDrop: (user: User, animal: Animal) => boolean;
  onTake: (user: User, animal: Animal) => void;
};

export const UserCart = ({ value, animals, canDrop, onTake }: Props) => {
  const droppableId = `user-${value.id}`;

  const { setNodeRef } = useDroppable({
    id: droppableId,
    data: { value, canDrop, onTake },
  });

  const activeOverId = useSelector((state: RootState) => state.dnd.activeOverId);
  const isAllowed = useSelector((state: RootState) => state.dnd.isAllowed);

  const isOver = activeOverId === droppableId;

  return (
    <div className={s.root}>
      <div className={s.title}>{value.nickname || value.id}</div>
      <div
        ref={setNodeRef}
        className={cn(s.body, isOver && s.isOver, isOver && isAllowed && s.canDrop)}
      >
        {animals?.map((a) => (
          <AnimalEditingCard key={a.id} value={a} />
        ))}
      </div>
    </div>
  );
};

