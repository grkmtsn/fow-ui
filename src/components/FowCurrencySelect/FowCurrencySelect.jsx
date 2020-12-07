import React from 'react';
import { Select } from 'antd';

import { useGlobalState } from '../../context/StateContext';
import { CHANGE_CURRENCY } from '../../context/types';
import currencies from '../../constants/currencies';

const FowCurrencySelect = () => {
  const [state, dispatch] = useGlobalState();
  const handleChangeCurrency = (value) => {
    const currency = currencies.find((item) => item.id === value);
    dispatch({
      type: CHANGE_CURRENCY,
      payload: {
        currency: currency.id,
        currencyLocale: currency.locale,
      },
    });
  };

  return (
    <div>
      <Select
        style={{ width: 240 }}
        placeholder="Para Birimi Seçiniz"
        onChange={handleChangeCurrency}
        defaultValue={state?.currency}
        allowClear
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {currencies.map((item) => (
          <Select.Option value={item.id} key={item.id}>{item.title}</Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default FowCurrencySelect;
