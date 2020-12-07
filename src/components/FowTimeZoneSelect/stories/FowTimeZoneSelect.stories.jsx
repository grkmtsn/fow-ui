import React from 'react';
import FowTimeZoneSelect from '../FowTimeZoneSelect';
import FowProvider from '../../FowProvider/FowProvider';

export default {
  title: 'Time Zone Select',
  component: FowTimeZoneSelect,
};

const state = {
  timezone: 4,
};

const Template = (args) => (
  <FowProvider initialState={state}>
    <FowTimeZoneSelect {...args} />
  </FowProvider>
);

export const Default = Template.bind({});
Default.args = {};
