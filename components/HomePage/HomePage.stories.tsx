import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { HomePage, HomePageProps } from './HomePage';

export default {
  title: 'HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const Main = (args: HomePageProps) => (
  <HomePage {...args} />
);

Main.args =  {
  user: null,
  isLoading: false,
  onSubmit: () => {}
}