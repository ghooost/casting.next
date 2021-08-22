import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { HomePage } from './';

export default {
  title: 'HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const Main = (args) => (
  <HomePage {...args} />
);

Main.args = {
  label: 'HomePage',
}
