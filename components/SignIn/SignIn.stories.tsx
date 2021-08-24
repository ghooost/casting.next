import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { SignIn, SignInProps } from './SignIn';

export default {
  title: 'SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>;

export const Main = (args: SignInProps) => (
  <SignIn {...args} />
);

Main.args =  {
  user: null,
  isLoading: false,
  onSubmit: () => {}
}