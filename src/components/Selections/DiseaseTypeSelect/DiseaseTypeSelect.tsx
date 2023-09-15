import React from 'react';
import { SelectProps } from 'antd/lib/select';
import { DiseaseType } from 'src/server.types';
import { DiseaseIcon } from 'src/components/DiseaseIcon';
import { TextSelection } from 'src/components/TextSelection';
import { createSelectByArray, getCleanData } from '../helpers';
import s from './DiseaseTypeSelect.sass';

export type DiseaseTypeSelectProps = SelectProps<DiseaseType[] | DiseaseType>;

const data = getCleanData<string>(DiseaseType);

export const DiseaseTypeSelect = createSelectByArray<DiseaseType>(data, {
  tPath: `components.DiseaseTypeSelect`,
  renderItem: (type: DiseaseType, t, selection) => {
    const text = t(`enums.DiseaseType.${type}`);
    return (
      <div className={s.item}>
        <DiseaseIcon value={type} />
        <TextSelection text={text} title={text} selection={selection} />
      </div>
    );
  },
  getDataText: (type: DiseaseType, t) => t(`enums.DiseaseType.${type}`),
});

DiseaseTypeSelect.displayName = 'DiseaseTypeSelect';
