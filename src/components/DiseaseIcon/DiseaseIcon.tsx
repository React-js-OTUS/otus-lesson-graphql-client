import React, { FC } from 'react';
import cn from 'clsx';
import { DiseaseType } from 'src/server.types';
import { feedbackDev } from 'src/utils/feedback';
import Broken from './broken.svg';
import Cold from './cold.svg';
import Parasites from './parasites.svg';
import Stomach from './stomach.svg';
import s from './DiseaseIcon.sass';

export type DiseaseIconProps = {
  className?: string;
  value: DiseaseType;
};

export const DiseaseIcon: FC<DiseaseIconProps> = ({ className, value }) => {
  const res = (() => {
    switch (value) {
      case DiseaseType.Broken:
        return <Broken />;

      case DiseaseType.Cold:
        return <Cold />;

      case DiseaseType.Parasites:
        return <Parasites />;

      case DiseaseType.Stomach:
        return <Stomach />;

      default: {
        const unhandled: never = value;
        feedbackDev(new Error(`unhandled DiseaseIcon: ${unhandled}`));
        return null;
      }
    }
  })();

  return <div className={cn(s.root, className)}>{res}</div>;
};
