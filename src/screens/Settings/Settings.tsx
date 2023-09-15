import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'src/components/Page';
import { Divider } from 'antd';
import { MedicinesManagePanel } from 'src/components/MedicinesManagePanel';
import { DiseasesManagePanel } from 'src/components/DiseasesManagePanel';
import s from './Settings.sass';

export const Settings: FC = () => {
  const { t } = useTranslation();

  return (
    <Page title={t`screens.Settings.title`} className={s.root}>
      <MedicinesManagePanel />
      <Divider />
      <DiseasesManagePanel />
    </Page>
  );
};

export default Settings;
