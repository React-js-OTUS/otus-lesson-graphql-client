import React, { memo } from 'react';
import cn from 'clsx';
import { Divider } from 'antd';
import { ProfileCompletedForm } from 'src/components/CompletedForms/ProfileCompletedForm';
import { ChangePasswordCompletedForm } from 'src/components/CompletedForms/ChangePasswordCompletedForm';
import { useTranslation } from 'react-i18next';
import s from './SettingsBlock.sass';

export type SettingsBlockProps = {
  className?: string;
};

export const SettingsBlock = memo<SettingsBlockProps>(({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.root, className)}>
      <ProfileCompletedForm
        successMessageText={t(`screens.ProfileScreen.updateProfile.success`)}
        title={t(`screens.ProfileScreen.updateProfile.title`)}
        submitText={t(`screens.ProfileScreen.updateProfile.save`)}
      />
      <Divider />
      <ChangePasswordCompletedForm
        submitText={t(`screens.ProfileScreen.changePassword.save`)}
        title={t(`screens.ProfileScreen.changePassword.title`)}
        successMessageText={t(`screens.ProfileScreen.changePassword.success`)}
      />
    </div>
  );
});

SettingsBlock.displayName = 'SettingsBlock';
