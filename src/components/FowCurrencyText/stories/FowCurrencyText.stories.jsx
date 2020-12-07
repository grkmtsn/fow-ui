/* eslint-disable react/style-prop-object */
import React from 'react';
import FowCurrencyText from '../FowCurrencyText';
import FowCurrencySelect from '../../FowCurrencySelect/FowCurrencySelect';
import FowProvider from '../../FowProvider/FowProvider';

export default {
  title: 'Currency Text',
  component: FowCurrencyText,
};

const state = {
  currency: 2,
};

const Template = (args) => (
  <FowProvider initialState={state}>
    <FowCurrencySelect />
    <FowCurrencyText {...args} />
  </FowProvider>
);

export const Default = Template.bind({});
Default.args = {
  value: 20,
  style: {
    fontSize: 30,
  },
  className: 'rubi',
};
