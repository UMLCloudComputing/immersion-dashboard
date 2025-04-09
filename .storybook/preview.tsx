import type { Preview } from '@storybook/react'
import '../src/app/globals.css'; // replace with the name of your tailwind css file
import SessionProvider from "../src/components/SessionProvider"
import React, { FC } from 'react';

const mockSession = {
  expires: '2023-01-01T00:00:00Z',
  user: {
    name: 'Storybook User',
    email: 'storybook@mySite.com',
  },
};


const preview: Preview = {
  parameters: {
    next: {
      appDirectory: '../src/app',
    },
    decorators: [
      (Story: FC) => (
        <SessionProvider session={mockSession}>
          <Story />
        </SessionProvider>
      )
    ],
    //actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

};

export default preview;