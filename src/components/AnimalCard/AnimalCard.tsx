import React, { forwardRef } from 'react';
import cn from 'clsx';
import { Animal } from 'src/server.types';
import { AnimalIcon } from 'src/components/AnimalIcon';
import s from './AnimalCard.sass';

export type AnimalCardProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  value: Animal;
};

export type AnimalCardRef = HTMLButtonElement;

export const AnimalCard = forwardRef<AnimalCardRef, AnimalCardProps>(({ className, value, ...props }, ref) => {
  if (!value) return null;
  return (
    <button ref={ref} {...props} type="button" className={cn(s.root, className)}>
      <AnimalIcon value={value.__typename} />
      <div>{value.name || value.id}</div>
    </button>
  );
});
