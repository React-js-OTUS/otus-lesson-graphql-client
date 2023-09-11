import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'src/components/Page';
import s from './Home.sass';

export const Home: FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t`screens.HomeScreen.title`} className={s.root}>
      Главная
    </Page>
  );
};

export default Home;
