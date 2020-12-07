import React from 'react';
import FowMomentLocalizationSelect from '../FowMomentLocalizationSelect';
import FowProvider from '../../FowProvider/FowProvider';

export default {
  title: 'Moment Localization Select',
  component: FowMomentLocalizationSelect,
};

const state = {
  date: 1,
};

const Template = (args) => (
  <FowProvider initialState={state}>
    <FowMomentLocalizationSelect {...args} />
  </FowProvider>
);

export const Default = Template.bind({});
Default.args = {};
