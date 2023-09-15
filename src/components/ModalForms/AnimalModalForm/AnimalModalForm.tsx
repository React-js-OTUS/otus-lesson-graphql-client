import React, { FC, useRef } from 'react';
import cn from 'clsx';
import { Modal } from 'src/components/Modal';
import { AnimalCompletedForm, AnimalCompletedFormRef } from 'src/components/CompletedForms/AnimalCompletedForm';
import { AnimalFormValues } from 'src/components/Forms';
import { useOpenCloseNotMemo } from 'src/hooks/useOpenCloseNotMemo';
import { useModalPrevent } from 'src/hooks/useModalPrevent';
import { useTranslation } from 'react-i18next';
import { InputRef } from 'antd';
import s from './AnimalModalForm.sass';

export type AnimalModalFormProps = {
  className?: string;
  children: (callbacks: { open: (initialValue?: AnimalFormValues) => void; close: () => void }) => React.ReactNode;
};

export const AnimalModalForm: FC<AnimalModalFormProps> = ({ className, children }) => {
  const form = useRef<AnimalCompletedFormRef>();
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

  return (
    <>
      {children({
        close: onClose,
        open: (initialValue) => {
          open();
          if (initialValue) form.current.setValue(initialValue);
        },
      })}
      <Modal
        visible={visible}
        onClose={onClose}
        afterOpen={() => input.current?.focus()}
        className={cn(s.root, className)}
      >
        <AnimalCompletedForm
          autoFocusElement={input}
          ref={form}
          onSuccess={close}
          title={t`components.AnimalModalForm.add.title`}
          submitText={t`components.AnimalModalForm.add.submit`}
          successMessageText={t`components.AnimalModalForm.add.success`}
        />
      </Modal>
    </>
  );
};
