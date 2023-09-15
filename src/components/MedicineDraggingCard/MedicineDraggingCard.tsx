import React, { FC } from 'react';
import cn from 'clsx';
import { MedicineEditingCardProps, MedicineEditingCard } from 'src/components/MedicineEditingCard';
import { useDrag } from 'react-dnd';
import s from './MedicineDraggingCard.sass';

export type MedicineDraggingCardProps = MedicineEditingCardProps & {
  dndName: string;
};

export const MedicineDraggingCard: FC<MedicineDraggingCardProps> = ({ dndName, className, ...props }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dndName,
    item: props.value,
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return <MedicineEditingCard className={cn(s.root, isDragging && s.isDragging, className)} {...props} ref={drag} />;
};
