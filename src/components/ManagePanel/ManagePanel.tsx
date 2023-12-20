import React, { FC, useMemo } from 'react';
import cn from 'clsx';
import { AnimalDraggingCards } from 'src/components/AnimalDraggingCards';
import { Animal, User } from 'src/server.types';
import { Title } from 'src/components/Title';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import {
  SET_DOCTOR_FOR_ANIMAL,
  SetDoctorForAnimalData,
  SetDoctorForAnimalVars,
} from 'src/components/ManagePanel/connection';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { Button, message } from 'antd';
import { AnimalModalAddForm } from 'src/components/ModalForms/AnimalModalAddForm';
import { PlusOutlined } from '@ant-design/icons';
import { useStore } from 'src/client/StoreProvider';
import { AnimalEditingCards } from '../AnimalEditingCards';
import { UsersPanel, UsersPanelProps } from './UsersPanel';
import s from './ManagePanel.sass';

export type ManagePanelProps = {
  className?: string;
};

const DND_KEY = 'manage-panel';

export const ManagePanel: FC<ManagePanelProps> = ({ className }) => {
  const { t } = useTranslation();
  const { users, profile, animals } = useStore();

  const [updateAnimal] = useMutation<SetDoctorForAnimalData, SetDoctorForAnimalVars>(SET_DOCTOR_FOR_ANIMAL);
  const { catcher } = createErrorHandlers((code, _, error) => {
    if (code === null) {
      message.error(t(`errors.${error.message}`));
    } else {
      message.error(t(`errors.${code}`));
    }
  });
  const onTake: UsersPanelProps['onTake'] = (doctor, animal) => {
    updateAnimal({ variables: { id: animal.id, doctorId: doctor.id } }).catch(catcher);
  };
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
    <div className={cn(s.root, className)}>
      <Title className={cn(s.title, s.line)}>
        <AnimalModalAddForm>
          {({ open }) => (
            <Button size="small" type="primary" onClick={() => open()}>
              <PlusOutlined />
            </Button>
          )}
        </AnimalModalAddForm>
        {t`components.ManagePanel.convalescents`}
      </Title>
      <AnimalDraggingCards
        dndName={DND_KEY}
        value={animalsByTypes.convalescents}
        empty={t`components.ManagePanel.empty`}
      />
      <Title className={s.title}>{t`components.ManagePanel.doctors`}</Title>
      <UsersPanel
        canDrop={canDrop}
        dndName={DND_KEY}
        animals={animalsByTypes.forDoctors}
        value={users}
        onTake={onTake}
      />
      <Title className={s.title}>{t`components.ManagePanel.healthy`}</Title>
      <AnimalEditingCards value={animalsByTypes.healthy} empty={t`components.ManagePanel.empty`} />
    </div>
  );
};
