import React, { useState } from 'react';
import { Select, SelectProps } from 'antd';
import cn from 'clsx';
import { Disease } from 'src/server.types';
import { TextSelection } from 'src/components/TextSelection';
import { DiseaseIcon } from 'src/components/DiseaseIcon';
import s from './DiseasesSelect.sass';

export type DiseasesSelectProps = SelectProps & {
  className?: string;
  items: Disease[];
  value: Disease['id'][];
  onBlur?: SelectProps['onBlur'];
  disabled?: SelectProps['disabled'];
  placeholder?: SelectProps['placeholder'];
  onChange: (value: Disease['id'][]) => void;
};

export const DiseasesSelect = ({
  className,
  disabled,
  placeholder,
  onBlur,
  items,
  value,
  onChange,
}: DiseasesSelectProps) => {
  const [search, onSearch] = useState<string>();

  const filterOption = (input: string, option: { title: string; value: string }) =>
    (option?.title ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      onBlur={onBlur}
      disabled={disabled}
      mode="multiple"
      className={cn(s.root, className)}
      filterOption={filterOption}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onSearch={onSearch}
    >
      {items?.map((item) => {
        return <Select.Option key={item.id} title={item.name}>
          <div className={s.item}>
            <DiseaseIcon value={item.type} />
            <TextSelection text={item.name} selection={search} />
          </div>
        </Select.Option>;
      })}
    </Select>
  );
};
