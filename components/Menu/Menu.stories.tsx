import { UserRole } from '@datatypes/users';
import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { Menu } from './Menu';

export default {
  title: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const NoUser = () => (
  <div style={{
    border: '1px solid black',
  }}>
    <Menu user={null} title="Hello"/>
  </div>
);

export const UserLogged = () => (
  <div style={{
    border: '1px solid black',
  }}>
    <Menu
      user={{
        email: 'user@users.com',
        role: UserRole.admin,
      }}
      title="Hello"
    />
  </div>
);
