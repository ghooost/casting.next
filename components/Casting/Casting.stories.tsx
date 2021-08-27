import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Casting } from './';

export default {
  title: 'Casting',
  component: Casting,
} as ComponentMeta<typeof Casting>;

export const Main = (args) => (
  <Casting {...args} />
);

Main.args = {
  name: 'Casting',
  note: 'blablabla',
}
