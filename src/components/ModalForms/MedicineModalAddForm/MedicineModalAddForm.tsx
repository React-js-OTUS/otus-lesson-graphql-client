import React, { FC, useRef } from 'react';
import cn from 'clsx';
import { Modal } from 'src/components/Modal';
import { MedicineAddCompletedForm, MedicineAddCompletedFormRef } from 'src/components/CompletedForms';
import { MedicineFormValues } from 'src/components/Forms';
import { useOpenCloseNotMemo } from 'src/hooks/useOpenCloseNotMemo';
import { useModalPrevent } from 'src/hooks/useModalPrevent';
import { useTranslation } from 'react-i18next';
import { InputRef } from 'antd';
import { MedicineInput } from 'src/server.types';
import s from './MedicineModalAddForm.sass';

export type MedicineModalAddFormProps = {
  className?: string;
  children: (callbacks: { open: (initialValue?: MedicineFormValues) => void; close: () => void }) => React.ReactNode;
};

export const MedicineModalAddForm: FC<MedicineModalAddFormProps> = ({ className, children }) => {
  const form = useRef<MedicineAddCompletedFormRef>();
  const input = useRef<InputRef>();
  const { t } = useTranslation();
  const [visible, { open, close }] = useOpenCloseNotMemo();
  const prevent = useModalPrevent();

  const onClose = () => {
    if (form.current?.isChanged()) {
      prevent({ onOk: close });
    } else {
      close();
    }
  };

  const initial = useRef<MedicineInput>();

  const afterOpen = () => {
    input.current?.focus();
    if (initial.current) form.current?.setValue(initial.current);
  };

  return (
    <>
      {children({
        close: onClose,
        open: (initialValue: MedicineInput) => {
          open();
          initial.current = initialValue;
        },
      })}
      <Modal visible={visible} onClose={onClose} afterOpen={afterOpen} className={cn(s.root, className)}>
        <MedicineAddCompletedForm
          autoFocusElement={input}
          ref={form}
          onSuccess={close}
          title={t`components.MedicineModalAddForm.title`}
          submitText={t`components.MedicineModalAddForm.submit`}
          successMessageText={t`components.MedicineModalAddForm.success`}
        />
      </Modal>
    </>
  );
};
