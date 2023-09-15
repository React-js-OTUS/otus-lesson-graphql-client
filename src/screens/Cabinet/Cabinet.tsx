import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'src/components/Page';
import { Title } from 'src/components/Title';
import { useSelector } from 'react-redux';
import { animalsSelectors } from 'src/store/animals';
import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { message } from 'antd';
import { Animal } from 'src/server.types';
import { useMutation } from '@apollo/client';
import { AnimalCards } from 'src/components/AnimalCards';
import { AnimalEditingCards } from 'src/components/AnimalEditingCards';
import { AnimalInfoCard } from 'src/components/AnimalInfoCard';
import { TO_HEAL_ANIMAL, ToHealAnimalData, ToHealAnimalVars } from './connection';
import s from './Cabinet.sass';

export const Cabinet: FC = () => {
  const { t } = useTranslation();
  const animals = useSelector(animalsSelectors.get);
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

  const onChooseAnimal = (value: Animal) => {
    setAnimal((v) => (v?.id === value.id ? null : value));
  };

  return (
    <Page title={t`screens.Cabinet.title`} className={s.root}>
      <Title>{t`screens.Cabinet.patients`}</Title>
      <AnimalCards onClick={onChooseAnimal} activeId={animal?.id} value={animalsByTypes.forDoctors} />
      <Title>{t`screens.Cabinet.table`}</Title>
      <AnimalInfoCard value={animal} />
      <Title>{t`screens.Cabinet.healthy`}</Title>
      <AnimalEditingCards value={animalsByTypes.healthy} />
    </Page>
  );
};

export default Cabinet;
