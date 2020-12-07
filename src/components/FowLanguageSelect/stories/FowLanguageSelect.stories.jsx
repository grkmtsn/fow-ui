import React from 'react';
import FowLanguageSelect from '../FowLanguageSelect';
import FowProvider from '../../FowProvider/FowProvider';

export default {
  title: 'Language Select',
  component: FowLanguageSelect,
};

const state = {
  language: 3,
};

const Template = (args) => (
  <FowProvider initialState={state}>
    <FowLanguageSelect {...args} />
  </FowProvider>
);

export const Default = Template.bind({});
Default.args = {};
