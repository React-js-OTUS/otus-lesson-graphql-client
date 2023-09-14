import React, { FC, useCallback, useState } from 'react';
import { SelectProps } from 'antd/lib/select';
import { Select } from 'antd';
import cn from 'clsx';
import { TextSelection } from 'src/components/TextSelection';
import { TFunction } from 'i18next/typescript/t';
import { useTranslation } from 'react-i18next';
import s from './factory.module.sass';

export type Options = {
  tPath?: string;
  renderItem?: (value: string, t: TFunction, selection: string) => React.ReactNode;
  find?: (value: string, option: Record<string, unknown>) => boolean;
  getDataText?: (value: string, t: TFunction) => string;
};

export const defaultGetDataText = (value: string, t: TFunction): string => t(value, { errorsMode: () => value });

const filterOption = (value: string, option: { ['data-text']: string }): boolean => {
  const text = option?.['data-text'];
  return text?.toLowerCase()?.includes(value?.toLowerCase());
};

export const createSelectByArray =
  <T extends string>(data: string[], options?: Options): FC<SelectProps<T[] | T>> =>
  ({ className, onSearch, onChange, placeholder, ...props }: SelectProps<T[] | T>): React.ReactElement => {
    const { renderItem, find = filterOption, tPath, getDataText = defaultGetDataText } = options || {};
    const [selection, setSelection] = useState('');
    const { t } = useTranslation();

    const handleSearch = useCallback(
      (value: string) => {
        onSearch?.(value);
        setSelection(value);
      },
      [onSearch]
    );

    const handleChange = useCallback<SelectProps<T[] | T>['onChange']>(
      (value, option) => {
        onChange?.(value, option);
        setSelection('');
      },
      [onChange]
    );

    return (
      <Select
        {...props}
        placeholder={placeholder || t([tPath, `placeholder`].filter(Boolean).join('.'))}
        showSearch
        filterOption={find}
        onChange={handleChange}
        onSearch={handleSearch}
        className={cn(s.root, className)}
      >
        {data.map((item) => (
          <Select.Option key={item} value={item} data-text={getDataText(item, t)}>
            {renderItem?.(item, t, selection) || (
              <TextSelection selection={selection} text={t(item as string)} title={t(item as string)} />
            )}
          </Select.Option>
        ))}
      </Select>
    );
  };

export const getCleanData = <T extends unknown>(type: Record<string, unknown>): T[] =>
  Object.keys(type)
    .filter((i) => i !== '__docgenInfo' && i !== 'displayName')
    .map((key) => type[key]) as T[];
