import React, { forwardRef } from 'react';
import cn from 'clsx';
import { Disease, DiseaseType } from 'src/server.types';
import { DiseaseIcon } from 'src/components/DiseaseIcon';
import s from './DiseaseCard.sass';

export type DiseaseCardProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  value: Disease;
};

export type DiseaseCardRef = HTMLButtonElement;

export const DiseaseCard = forwardRef<DiseaseCardRef, DiseaseCardProps>(({ className, value, ...props }, ref) => {
  if (!value) return null;
  return (
    <button ref={ref} {...props} type="button" className={cn(s.root, className)}>
      <DiseaseIcon value={value.__typename as DiseaseType} />
      <div>{value.name || value.id}</div>
    </button>
  );
});
