import React, { forwardRef } from 'react';
import cn from 'clsx';
import { MedicineCard, MedicineCardProps, MedicineCardRef } from 'src/components/MedicineCard';
import { MedicineModalUpdateForm } from 'src/components/ModalForms/MedicineModalUpdateForm';
import { MedicineInput } from 'src/server.types';
import s from './MedicineEditingCard.sass';

export type MedicineEditingCardProps = Omit<MedicineCardProps, 'onClick'>;

export const MedicineEditingCard = forwardRef<MedicineCardRef, MedicineEditingCardProps>(
  ({ className, ...props }, ref) => {
    if (!props.value) return null;

    const initial: MedicineInput = (() => ({
      name: props.value.name,
      heal: props.value.heal,
    }))();

    return (
      <MedicineModalUpdateForm id={props.value.id}>
        {({ open }) => (
          <MedicineCard ref={ref} className={cn(s.root, className)} onClick={() => open(initial)} {...props} />
        )}
      </MedicineModalUpdateForm>
    );
  }
);
