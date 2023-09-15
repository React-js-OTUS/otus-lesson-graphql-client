import React, { forwardRef } from 'react';
import cn from 'clsx';
import { Medicine } from 'src/server.types';
import { DiseaseIcon } from 'src/components/DiseaseIcon';
import s from './MedicineCard.sass';

export type MedicineCardProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  value: Medicine;
};

export type MedicineCardRef = HTMLButtonElement;

export const MedicineCard = forwardRef<MedicineCardRef, MedicineCardProps>(({ className, value, ...props }, ref) => {
  if (!value) return null;
  return (
    <button ref={ref} {...props} type="button" className={cn(s.root, className)}>
      {value.heal?.map((item) => (
        <DiseaseIcon value={item} key={item} />
      ))}
      <div>{value.name || value.id}</div>
    </button>
  );
});
