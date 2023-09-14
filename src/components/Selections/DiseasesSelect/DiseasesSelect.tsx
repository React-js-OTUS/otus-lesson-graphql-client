import React, { FC, useState } from 'react';
import { Select } from 'antd';
import cn from 'clsx';
import { Disease } from 'src/server.types';
import { TextSelection } from 'src/components/TextSelection';
import s from './DiseasesSelect.sass';

export type DiseasesSelectProps = {
  className?: string;
  items: Disease[];
  value: Disease[];
  onChange: (value: Disease[]) => void;
};

export const DiseasesSelect: FC<DiseasesSelectProps> = ({ className, items, value, onChange }) => {
  const [search, onSearch] = useState<string>();

  const filterOption = (input: string, option: { title: string; value: string }) =>
    (option?.title ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      mode="multiple"
      className={cn(s.root, className)}
      filterOption={filterOption}
      value={value}
      onChange={onChange}
      onSearch={onSearch}
    >
      {items?.map((item) => (
        <Select.Option key={item.id} title={item.name}>
          <TextSelection text={item.name} selection={search} />
        </Select.Option>
      ))}
    </Select>
  );
};
