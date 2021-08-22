import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Submit } from './';

export default {
  title: 'Submit',
  component: Submit,
} as ComponentMeta<typeof Submit>;

export const Main = (args) => (
  <Submit {...args} />
);

Main.args = {
  label: 'Submit',
}
