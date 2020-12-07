import React from 'react';
import { Select } from 'antd';

import { useGlobalState } from '../../context/StateContext';
import { CHANGE_MOMENT_LOCAL } from '../../context/types';
import momentLocals from '../../constants/momentLocals';

const FowMomentLocalizationSelect = () => {
  const [state, dispatch] = useGlobalState();

  const handleChangeLocalization = async (value) => {
    const item = momentLocals.find((language) => language.id === value);
    dispatch({
      type: CHANGE_MOMENT_LOCAL,
      payload: {
        date: item.id,
        moment: item.key,
      },
    });
  };

  return (
    <div>
      <Select
        style={{ width: 240 }}
        placeholder="Ülke Seçiniz"
        onChange={handleChangeLocalization}
        defaultValue={state?.date}
        allowClear
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {momentLocals.map((item) => (
          <Select.Option value={item.id} key={item.id}>{item.title}</Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default FowMomentLocalizationSelect;
