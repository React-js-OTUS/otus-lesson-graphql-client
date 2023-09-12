import React, { FC } from 'react';
import cn from 'clsx';
import { AnimalsPanel } from 'src/components/ManagePanel/AnimalsPanel';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { animalsSelectors } from 'src/store/animals';
import s from './ManagePanel.sass';

export type ManagePanelProps = {
  className?: string;
};

export const ManagePanel: FC<ManagePanelProps> = ({ className }) => {
  const animals = useSelector<RootState, RootState['animals']>(animalsSelectors.get);
  return (
    <div className={cn(s.root, className)}>
      <AnimalsPanel value={animals} />
    </div>
  );
};
