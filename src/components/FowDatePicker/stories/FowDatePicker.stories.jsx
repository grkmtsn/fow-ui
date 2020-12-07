import React from 'react';
import FowDatePicker from '../FowDatePicker';
import FowProvider from '../../FowProvider/FowProvider';

export default {
  title: 'Date Picker',
  component: FowDatePicker,
  argTypes: { onChange: { action: 'changed' } },
};

const state = {
  language: 4,
  date: 5,
  timezone: 575,
};

const Template = (args) => (
  <FowProvider initialState={state}>
    <FowDatePicker {...args} momentFormat="LLLL" />
  </FowProvider>
);

export const Default = Template.bind({});
