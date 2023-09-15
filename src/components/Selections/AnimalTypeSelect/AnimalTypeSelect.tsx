import React from 'react';
import { SelectProps } from 'antd/lib/select';
import { AnimalType } from 'src/server.types';
import { AnimalIcon } from 'src/components/AnimalIcon';
import { TextSelection } from 'src/components/TextSelection';
import { createSelectByArray, getCleanData } from '../helpers';
import s from './AnimalTypeSelect.sass';

export type AnimalTypeSelectProps = SelectProps<AnimalType[] | AnimalType>;

const data = getCleanData<string>(AnimalType);

export const AnimalTypeSelect = createSelectByArray<AnimalType>(data, {
  tPath: `components.AnimalTypeSelect`,
  renderItem: (type: AnimalType, t, selection) => {
    const text = t(`enums.AnimalType.${type}`);
    return (
      <div className={s.item}>
        <AnimalIcon value={type} />
        <TextSelection text={text} title={text} selection={selection} />
      </div>
    );
  },
  getDataText: (type: AnimalType, t) => t(`enums.AnimalType.${type}`),
});

AnimalTypeSelect.displayName = 'AnimalTypeSelect';
