import React, { FC } from 'react';
import cn from 'clsx';
import { AnimalDraggingCards } from 'src/components/AnimalDraggingCards';
import { useSelector } from 'react-redux';
import { animalsSelectors } from 'src/store/animals';
import { usersSelectors } from 'src/store/users';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { profileSelectors } from 'src/store/profile';
import { User } from 'src/server.types';
import { UsersPanel } from './UsersPanel';
import s from './ManagePanel.sass';

export type ManagePanelProps = {
  className?: string;
};

const DND_KEY = 'manage-panel';

export const ManagePanel: FC<ManagePanelProps> = ({ className }) => {
  const animals = useSelector(animalsSelectors.get);
  const users = useSelector(usersSelectors.get);
  const profile = useSelector(profileSelectors.get);

  const onTake = console.log;
  const canDrop = (doctor: User) => doctor.id === profile.id;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={cn(s.root, className)}>
        <AnimalDraggingCards dndName={DND_KEY} value={animals} />
        <UsersPanel canDrop={canDrop} dndName={DND_KEY} animals={animals} value={users} onTake={onTake} />
      </div>
    </DndProvider>
  );
};
