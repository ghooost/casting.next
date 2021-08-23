import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { LoginCover, LoginCoverProps } from './LoginCover';

export default {
  title: 'LoginCover',
  component: LoginCover,
} as ComponentMeta<typeof LoginCover>;

export const Main = (args: LoginCoverProps) => (
  <LoginCover {...args} />
);

Main.args =  {
  user: null,
  isLoading: false,
  onSubmit: () => {}
}