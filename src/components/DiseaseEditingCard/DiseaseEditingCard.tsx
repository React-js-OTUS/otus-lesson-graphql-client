import React, { forwardRef } from 'react';
import cn from 'clsx';
import { DiseaseCard, DiseaseCardProps, DiseaseCardRef } from 'src/components/DiseaseCard';
import { DiseaseModalUpdateForm } from 'src/components/ModalForms/DiseaseModalUpdateForm';
import { DiseaseInput } from 'src/server.types';
import s from './DiseaseEditingCard.sass';

export type DiseaseEditingCardProps = Omit<DiseaseCardProps, 'onClick'>;

export const DiseaseEditingCard = forwardRef<DiseaseCardRef, DiseaseEditingCardProps>(
  ({ className, ...props }, ref) => {
    if (!props.value) return null;

    const initial: DiseaseInput = (() => ({
      name: props.value.name,
      desc: props.value.desc,
      type: props.value.type,
    }))();

    return (
      <DiseaseModalUpdateForm id={props.value.id}>
        {({ open }) => (
          <DiseaseCard ref={ref} className={cn(s.root, className)} onClick={() => open(initial)} {...props} />
        )}
      </DiseaseModalUpdateForm>
    );
  }
);
