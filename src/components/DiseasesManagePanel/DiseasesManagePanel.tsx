import React, { FC } from 'react';
import cn from 'clsx';
import { Title } from 'src/components/Title';
import { DiseaseModalAddForm } from 'src/components/ModalForms';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { DiseasesEditingCards } from 'src/components/DiseasesEditingCards';
import { useStore } from 'src/client/StoreProvider';
import s from './DiseasesManagePanel.sass';

export type DiseasesManagePanelProps = {
  className?: string;
};

export const DiseasesManagePanel: FC<DiseasesManagePanelProps> = ({ className }) => {
  const { t } = useTranslation();
  const { diseases } = useStore();

  return (
    <div className={cn(s.root, className)}>
      <Title className={s.title}>
        <DiseaseModalAddForm>
          {({ open }) => (
            <Button size="small" type="primary" onClick={() => open()}>
              <PlusOutlined />
            </Button>
          )}
        </DiseaseModalAddForm>
        {t`components.DiseasesManagePanel.title`}
      </Title>
      <DiseasesEditingCards value={diseases} empty={t`components.DiseasesManagePanel.empty`} />
    </div>
  );
};
