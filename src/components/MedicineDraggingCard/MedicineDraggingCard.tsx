import React, { FC } from 'react';
import cn from 'clsx';
import { MedicineEditingCardProps, MedicineEditingCard } from 'src/components/MedicineEditingCard';
import s from './MedicineDraggingCard.sass';

export type MedicineDraggingCardProps = MedicineEditingCardProps & {
  dndName: string;
};

export const MedicineDraggingCard: FC<MedicineDraggingCardProps> = ({ dndName, className, ...props }) => (
  <MedicineEditingCard className={cn(s.root, className)} {...props} />
);
