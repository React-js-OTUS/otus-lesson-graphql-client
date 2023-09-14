import React, { FC, useMemo } from 'react';
import cn from 'clsx';
import { AnimalDraggingCards } from 'src/components/AnimalDraggingCards';
import { useSelector } from 'react-redux';
import { animalsSelectors } from 'src/store/animals';
import { usersSelectors } from 'src/store/users';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { profileSelectors } from 'src/store/profile';
import { Animal, User } from 'src/server.types';
import { Title } from 'src/components/Title';
import { useTranslation } from 'react-i18next';
import { AnimalCards } from '../AnimalCards';
import { UsersPanel } from './UsersPanel';
import s from './ManagePanel.sass';

export type ManagePanelProps = {
  className?: string;
};

const DND_KEY = 'manage-panel';

export const ManagePanel: FC<ManagePanelProps> = ({ className }) => {
  const { t } = useTranslation();
  const animals = useSelector(animalsSelectors.get);
  const users = useSelector(usersSelectors.get);
  const profile = useSelector(profileSelectors.get);

  const onTake = console.log;
  const canDrop = (doctor: User) => doctor.id === profile.id;

  const animalsByTypes = useMemo(() => {
    const healthy: Animal[] = [];
    const convalescents: Animal[] = [];
    const forDoctors: Animal[] = [];
    for (let i = 0; i < animals?.length; i++) {
      const animal = animals[i];
      if (!animal.doctor?.id) convalescents.push(animal);
      else if (!animal.diseases?.length) healthy.push(animal);
      else forDoctors.push(animal);
    }
    return {
      healthy,
      forDoctors,
      convalescents,
    };
  }, [animals]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={cn(s.root, className)}>
        <Title className={s.title}>{t`components.ManagePanel.convalescents`}</Title>
        <AnimalDraggingCards dndName={DND_KEY} value={animalsByTypes.convalescents} />
        <Title className={s.title}>{t`components.ManagePanel.doctors`}</Title>
        <UsersPanel
          canDrop={canDrop}
          dndName={DND_KEY}
          animals={animalsByTypes.forDoctors}
          value={users}
          onTake={onTake}
        />
        <Title className={s.title}>{t`components.ManagePanel.healthy`}</Title>
        <AnimalCards value={animalsByTypes.healthy} />
      </div>
    </DndProvider>
  );
};
