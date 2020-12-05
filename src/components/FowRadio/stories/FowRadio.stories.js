/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import FowRadio from '../FowRadio';

// This default export determines where your story goes in the story list
export default {
  title: 'Radio',
  component: FowRadio,
};

const DefaultRadio = (args) => <FowRadio {...args} />;

export const Default = DefaultRadio.bind({});
Default.args = {
  label: 'Radio',
};

const ButtonGroupRadio = () => (
  <FowRadio.Group defaultValue="a">
    <FowRadio.Button value="a">Hangzhou</FowRadio.Button>
    <FowRadio.Button value="b">Shanghai</FowRadio.Button>
    <FowRadio.Button value="c">Beijing</FowRadio.Button>
    <FowRadio.Button value="d">Chengdu</FowRadio.Button>
  </FowRadio.Group>
);

export const ButtonGroup = ButtonGroupRadio.bind({});
