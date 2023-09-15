import React, { FC, useState } from 'react';
import { Select, SelectProps } from 'antd';
import cn from 'clsx';
import { Disease } from 'src/server.types';
import { TextSelection } from 'src/components/TextSelection';
import s from './DiseaseSelect.sass';

export type DiseaseSelectProps = SelectProps & {
  className?: string;
  items: Disease[];
  value: Disease['id'];
  onBlur?: SelectProps['onBlur'];
  disabled?: SelectProps['disabled'];
  placeholder?: SelectProps['placeholder'];
  onChange: (value: Disease['id']) => void;
};

export const DiseaseSelect: FC<DiseaseSelectProps> = ({
  className,
  disabled,
  placeholder,
  onBlur,
  items,
  value,
  onChange,
}) => {
  const [search, onSearch] = useState<string>();

  const filterOption = (input: string, option: { title: string; value: string }) =>
    (option?.title ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      onBlur={onBlur}
      disabled={disabled}
      className={cn(s.root, className)}
      filterOption={filterOption}
      value={value}
      placeholder={placeholder}
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
