import React, { FC } from 'react';
import cn from 'clsx';
import { Title } from 'src/components/Title';
import { MedicineModalAddForm } from 'src/components/ModalForms';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { MedicinesEditingCards } from 'src/components/MedicinesEditingCards';
import { useSelector } from 'react-redux';
import { medicinesSelectors } from 'src/store/medicines';
import s from './MedicinesManagePanel.sass';

export type MedicinesManagePanelProps = {
  className?: string;
};

export const MedicinesManagePanel: FC<MedicinesManagePanelProps> = ({ className }) => {
  const { t } = useTranslation();
  const medicines = useSelector(medicinesSelectors.get);

  return (
    <div className={cn(s.root, className)}>
      <Title className={s.title}>
        <MedicineModalAddForm>
          {({ open }) => (
            <Button size="small" type="primary" onClick={() => open()}>
              <PlusOutlined />
            </Button>
          )}
        </MedicineModalAddForm>
        {t`components.MedicinesManagePanel.title`}
      </Title>
      <MedicinesEditingCards value={medicines} empty={t`components.MedicinesManagePanel.empty`} />
    </div>
  );
};
