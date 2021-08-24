import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { SignUpPage, SignUpPageProps } from './SignUpPage';

export default {
  title: 'SignUpPage',
  component: SignUpPage,
} as ComponentMeta<typeof SignUpPage>;

export const Main = (args: SignUpPageProps) => (
  <SignUpPage {...args} />
);

Main.args =  {
  isLoading: false,
  onSubmit: () => {}
}