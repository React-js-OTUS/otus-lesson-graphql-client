import React, { FC, useRef } from 'react';
import cn from 'clsx';
import { Modal } from 'src/components/Modal';
import { AnimalCompletedForm, AnimalCompletedFormRef } from 'src/components/CompletedForms/AnimalCompletedForm';
import { AnimalFormValues } from 'src/components/Forms';
import { useOpenCloseNotMemo } from 'src/hooks/useOpenCloseNotMemo';
import { useModalPrevent } from 'src/hooks/useModalPrevent';
import { useTranslation } from 'react-i18next';
import s from './AnimalModalForm.sass';

export type AnimalModalFormProps = {
  className?: string;
  children: (callbacks: { open: (initialValue?: AnimalFormValues) => void; close: () => void }) => React.ReactNode;
};

export const AnimalModalForm: FC<AnimalModalFormProps> = ({ className, children }) => {
  const form = useRef<AnimalCompletedFormRef>();
  const { t } = useTranslation();
  const [visible, { open, close }] = useOpenCloseNotMemo();
  const prevent = useModalPrevent();
  return (
    <>
      {children({
        close: () => prevent({ onOk: close }),
        open: (initialValue) => {
          open();
          if (initialValue) form.current.setValue(initialValue);
        },
      })}
      <Modal visible={visible} onClose={close} className={cn(s.root, className)}>
        <AnimalCompletedForm
          ref={form}
          title={t`components.AnimalModalForm.add.title`}
          submitText={t`components.AnimalModalForm.add.submit`}
          successMessageText={t`components.AnimalModalForm.add.success`}
        />
      </Modal>
    </>
  );
};
