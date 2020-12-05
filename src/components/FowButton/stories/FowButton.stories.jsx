import React from 'react';
import FowButton from '../FowButton';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: FowButton,
};

const Template = (args) => <FowButton {...args} type="primary" />;

export const Default = Template.bind({});
Default.args = {
  label: 'Awsome',
};
