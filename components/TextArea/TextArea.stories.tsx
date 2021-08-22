import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from './';

export default {
  title: 'TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

export const Main = (args) => (
  <TextArea {...args} />
);

Main.args = {
  placeholder: 'Text area',
  value: 'blablabla',
}
