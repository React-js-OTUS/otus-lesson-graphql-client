import React, { FC } from 'react';
import cn from 'clsx';
import { Animal } from 'src/server.types';
import { feedbackDev } from 'src/utils/feedback';
import Dog from './dog.svg';
import Cat from './cat.svg';
import Bird from './bird.svg';
import s from './AnimalIcon.sass';

export type AnimalIconProps = {
  className?: string;
  value: Animal['__typename'];
};

export const AnimalIcon: FC<AnimalIconProps> = ({ className, value }) => {
  const res = (() => {
    switch (value) {
      case 'Bird':
        return <Bird />;

      case 'Cat':
        return <Cat />;

      case 'Dog':
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
