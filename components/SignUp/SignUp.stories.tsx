import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { SignUp, SignUpProps } from './SignUp';

export default {
  title: 'SignUp',
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

export const Main = (args: SignUpProps) => (
  <SignUp {...args} />
);

Main.args =  {
  isLoading: false,
  onSubmit: () => {}
}