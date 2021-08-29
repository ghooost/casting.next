import { ComponentMeta } from '@storybook/react';
import React from 'react';

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
