import React from 'react';
import { Select } from 'antd';

import { useGlobalState } from '../../context/StateContext';
import { CHANGE_TIMEZONE } from '../../context/types';
import timeZones from '../../constants/timeZones';

const FowTimeZoneSelect = () => {
  const [state, dispatch] = useGlobalState();
  const handleChangeTimeZone = (value) => {
    const zone = timeZones.find((item) => item.id === value);
    dispatch({
      type: CHANGE_TIMEZONE,
      payload: {
        timezone: zone.id,
      },
    });
  };

  return (
    <div>
      <Select
        style={{ width: 240 }}
        placeholder="Saat Dilimi Seçiniz"
        onChange={handleChangeTimeZone}
        defaultValue={state?.timezone}
        allowClear
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {timeZones.map((item) => (
          <Select.Option value={item.id} key={item.id}>{item.title}</Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default FowTimeZoneSelect;
