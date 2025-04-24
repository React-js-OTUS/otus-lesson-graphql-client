import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'src/components/Page';
import { ManagePanel } from 'src/components/ManagePanel';
import NativeDragComponent from 'src/screens/Home/NativeDragComponent';
import s from './Home.sass';
// import NativeDragComponent from './NativeDragComponent';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Page title={t`screens.HomeScreen.title`} className={s.root}>
      <NativeDragComponent />
      <ManagePanel />
    </Page>
  );
};

export default Home;
