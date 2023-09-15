import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'src/components/Page';
import { Title } from 'src/components/Title';
import { useSelector } from 'react-redux';
import { animalsSelectors } from 'src/store/animals';
import { medicinesSelectors } from 'src/store/medicines';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { message } from 'antd';
import { Animal, Medicine } from 'src/server.types';
import { useMutation } from '@apollo/client';
import { AnimalCards } from 'src/components/AnimalCards';
import { AnimalEditingCards } from 'src/components/AnimalEditingCards';
import deepEqual from 'fast-deep-equal';
import { AnimalDropInfoCard } from 'src/components/AnimalDropInfoCard';
import { MedicineDraggingCards } from 'src/components/MedicineDraggingCards';
import { TO_HEAL_ANIMAL, ToHealAnimalData, ToHealAnimalVars } from './connection';
import s from './Cabinet.sass';

const dndName = 'cabinet-table';
export const Cabinet: FC = () => {
  const { t } = useTranslation();
  const animals = useSelector(animalsSelectors.get);
  const medicines = useSelector(medicinesSelectors.get);
  const [animal, setAnimal] = useState<Animal>();
  const [updateAnimal] = useMutation<ToHealAnimalData, ToHealAnimalVars>(TO_HEAL_ANIMAL);

  const { catcher } = createErrorHandlers((code, _, error) => {
    if (code === null) {
      message.error(t(`errors.${error.message}`));
    } else {
      message.error(t(`errors.${code}`));
    }
  });

  const animalsByTypes = useMemo(() => {
    const healthy: Animal[] = [];
    const forDoctors: Animal[] = [];
    for (let i = 0; i < animals?.length; i++) {
      const item = animals[i];
      if (!item.doctor?.id) continue;
      else if (!item.diseases?.length) healthy.push(item);
      else forDoctors.push(item);
    }
    return {
      healthy,
      forDoctors,
    };
  }, [animals]);

  useEffect(() => {
    if (!animalsByTypes.forDoctors.find((i) => i.id === animal?.id)) setAnimal(null);
  }, [animalsByTypes.forDoctors, animal]);

  useEffect(() => {
    const found = animalsByTypes.forDoctors.find((i) => i.id === animal?.id);
    setAnimal((v) => {
      if (!deepEqual(found, v)) return found;
      return v;
    });
  }, [animalsByTypes.forDoctors, animal]);

  const onChooseAnimal = (value: Animal) => {
    setAnimal((v) => (v?.id === value.id ? null : value));
  };

  const canDrop = (anim: Animal, medicine: Medicine) =>
    anim.diseases?.some((i) => medicine.heal?.some((l) => l === i.type));

  const onTake = (anim: Animal, medicine: Medicine) => {
    updateAnimal({
      variables: {
        id: anim.id,
        diseaseIds: anim.diseases?.filter((i) => !medicine.heal.some((l) => l === i.type)).map((i) => i.id),
      },
    })
      .then(() => message.success(t`screens.Cabinet.success`))
      .catch(catcher);
  };

  return (
    <Page title={t`screens.Cabinet.title`} className={s.root}>
      <Title>{t`screens.Cabinet.patients`}</Title>
      <AnimalCards onClick={onChooseAnimal} activeId={animal?.id} value={animalsByTypes.forDoctors} />
      <div className={s.main}>
        <div className={s.table}>
          <Title>{t`screens.Cabinet.table`}</Title>
          <AnimalDropInfoCard dndName={dndName} value={animal} onTake={onTake} canDrop={canDrop} />
        </div>
        <div>
          <Title>{t`screens.Cabinet.medicines`}</Title>

          <MedicineDraggingCards value={medicines} dndName={dndName} />
        </div>
      </div>
      <Title>{t`screens.Cabinet.healthy`}</Title>
      <AnimalEditingCards value={animalsByTypes.healthy} />
    </Page>
  );
};

export default Cabinet;
