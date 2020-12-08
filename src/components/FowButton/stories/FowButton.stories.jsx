/* eslint-disable react/style-prop-object */
import React from 'react';
import { generateThemeColor, changeAntdTheme } from 'dynamic-antd-theme';
import FowButton from '../FowButton';
import FowProvider from '../../FowProvider/FowProvider';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: FowButton,
};

const Template = (args) => {
  changeAntdTheme(generateThemeColor('#ccc'));
  return (
    <FowProvider>
      <FowButton {...args} type="primary" />
    </FowProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Awsome',
};
