import React from 'react';
import { Select } from 'antd';

import { useGlobalState } from '../../context/StateContext';
import { CHANGE_LANGUAGE } from '../../context/types';
import languages from '../../constants/languages';

const FowLanguageSelect = () => {
  const [state, dispatch] = useGlobalState();
  const handleChangeLanguage = async (value) => {
    const item = languages.find((language) => language.id === value);
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: {
        language: item?.id,
        locale: item?.locale,
        direction: item?.direction,
      },
    });
  };

  return (
    <div>
      <Select
        style={{ width: 240 }}
        placeholder="Dil Seçiniz"
        onChange={handleChangeLanguage}
        defaultValue={state?.language}
        allowClear
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {languages?.map((item) => (
          <Select.Option value={item?.id} key={item?.id}>{item?.title}</Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default FowLanguageSelect;
