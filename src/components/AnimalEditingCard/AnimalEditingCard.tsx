import React, { forwardRef } from 'react';
import cn from 'clsx';
import { AnimalCard, AnimalCardProps, AnimalCardRef } from 'src/components/AnimalCard';
import { AnimalModalUpdateForm } from 'src/components/ModalForms/AnimalModalUpdateForm';
import { AnimalType, AnimalUpdateInput } from 'src/server.types';
import s from './AnimalEditingCard.sass';

export type AnimalEditingCardProps = Omit<AnimalCardProps, 'onClick'>;

export const AnimalEditingCard = forwardRef<AnimalCardRef, AnimalEditingCardProps>(({ className, ...props }, ref) => {
  if (!props.value) return null;

  const initial: AnimalUpdateInput = (() => ({
    age: props.value.age,
    comment: props.value.comment,
    diseaseIds: props.value.diseases?.map((i) => i.id),
    doctorId: props.value.doctor?.id,
    name: props.value.name,
    type: props.value.__typename as AnimalType,
  }))();

  return (
    <AnimalModalUpdateForm id={props.value.id}>
      {({ open }) => (
        <AnimalCard ref={ref} className={cn(s.root, className)} onClick={() => open(initial)} {...props} />
      )}
    </AnimalModalUpdateForm>
  );
});
