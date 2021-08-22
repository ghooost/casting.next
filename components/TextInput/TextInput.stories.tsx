import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { TextInput } from './';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Main = (args) => (
  <TextInput {...args} />
);

Main.args = {
  placeholder: 'Text field',
  value: 'blablabla',
}
