import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { ProfileMenu } from './ProfileMenu';
import { AuthRole } from '@shared/auth';

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
} as ComponentMeta<typeof ProfileMenu>;

export const NoUser = () => (
  <div style={{
    border: '1px solid black',
  }}>
    <ProfileMenu user={null} />
  </div>
);

export const UserLogged = () => (
  <div style={{
    border: '1px solid black',
  }}>
    <ProfileMenu user={{
      email: 'user@users.com',
      roles: [AuthRole.admin],
    }} />
  </div>
);
