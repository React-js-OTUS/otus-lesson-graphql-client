import React, { FC } from 'react';
import cn from 'clsx';
import { AnimalType } from 'src/server.types';
import { feedbackDev } from 'src/utils/feedback';
import Dog from './dog.svg';
import Cat from './cat.svg';
import Bird from './bird.svg';
import s from './AnimalIcon.sass';

export type AnimalIconProps = {
  className?: string;
  value: AnimalType;
};

export const AnimalIcon: FC<AnimalIconProps> = ({ className, value }) => {
  const res = (() => {
    switch (value) {
      case AnimalType.Bird:
        return <Bird />;

      case AnimalType.Cat:
        return <Cat />;

      case AnimalType.Dog:
        return <Dog />;

      default: {
        const unhandled: never = value;
        feedbackDev(new Error(`unhandled AnimalIcon: ${unhandled}`));
        return null;
      }
    }
  })();

  return <div className={cn(s.root, className)}>{res}</div>;
};
