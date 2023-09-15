import { useCallback } from 'react';
import { Modal, ModalFuncProps } from 'antd';
import { useTranslation } from 'react-i18next';

export const useModalPrevent = (): ((params: ModalFuncProps) => void) => {
  const { t } = useTranslation();
  return useCallback(
    (params: ModalFuncProps) => {
      Modal.confirm({
        title: t`hooks.useModalPrevent.title`,
        okText: t`hooks.useModalPrevent.ok`,
        cancelText: t`hooks.useModalPrevent.cancel`,
        okType: 'danger',
        ...params,
      });
    },
    [t]
  );
};
