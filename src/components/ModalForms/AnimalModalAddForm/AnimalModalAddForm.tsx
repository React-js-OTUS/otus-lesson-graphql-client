import React, { FC, useRef } from 'react';
import cn from 'clsx';
import { Modal } from 'src/components/Modal';
import { AnimalAddCompletedForm, AnimalAddCompletedFormRef } from 'src/components/CompletedForms';
import { AnimalFormValues } from 'src/components/Forms';
import { useOpenCloseNotMemo } from 'src/hooks/useOpenCloseNotMemo';
import { useModalPrevent } from 'src/hooks/useModalPrevent';
import { useTranslation } from 'react-i18next';
import { InputRef } from 'antd';
import { AnimalAddInput } from 'src/server.types';
import s from './AnimalModalAddForm.sass';

export type AnimalModalFormProps = {
  className?: string;
  children: (callbacks: { open: (initialValue?: AnimalFormValues) => void; close: () => void }) => React.ReactNode;
};

export const AnimalModalAddForm: FC<AnimalModalFormProps> = ({ className, children }) => {
  const form = useRef<AnimalAddCompletedFormRef>();
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

  const initial = useRef<AnimalAddInput>();

  const afterOpen = () => {
    input.current?.focus();
    if (initial.current) form.current?.setValue(initial.current);
  };

  return (
    <>
      {children({
        close: onClose,
        open: (initialValue: AnimalAddInput) => {
          open();
          initial.current = initialValue;
        },
      })}
      <Modal visible={visible} onClose={onClose} afterOpen={afterOpen} className={cn(s.root, className)}>
        <AnimalAddCompletedForm
          autoFocusElement={input}
          ref={form}
          onSuccess={close}
          title={t`components.AnimalModalAddForm.title`}
          submitText={t`components.AnimalModalAddForm.submit`}
          successMessageText={t`components.AnimalModalAddForm.success`}
        />
      </Modal>
    </>
  );
};
