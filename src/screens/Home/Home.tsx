import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'src/components/Page';
import { ManagePanel } from 'src/components/ManagePanel';
import { AnimalTypeSelect } from 'src/components/Selections/AnimalTypeSelect';
import { AnimalType, Disease } from 'src/server.types';
import { DiseasesSelect } from 'src/components/Selections/DiseasesSelect';
import { useSelector } from 'react-redux';
import { diseasesSelectors } from 'src/store/diseases';
import { AnimalForm } from 'src/components/Forms/AnimalForm';
import { useFormik } from 'formik';
import s from './Home.sass';

export const Home: FC = () => {
  const { t } = useTranslation();
  const diseases = useSelector(diseasesSelectors.get);
  const [value, onChange] = useState<Disease[]>();

  console.log({ value });

  const formik = useFormik({ initialValues: {}, onSubmit: console.log });
  return (
    <Page title={t`screens.HomeScreen.title`} className={s.root}>
      <AnimalForm formManager={formik} />
      <ManagePanel />
    </Page>
  );
};

export default Home;
