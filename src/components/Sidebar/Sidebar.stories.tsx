import Box from '../Box';
import Sidebar, { type Props } from './Sidebar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    component: (Sidebar),
    decorators: [],
    parameters: {}
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        onClick: () => { },
        containerProps: { bg: 'gray' },
        liProps: { p: 2, hoverBg: 'white' },
        header: <Box bg="blue" color="white" p={4}>Header</Box>,
        items: [
            { label: 'Home' },
            { label: 'Partners' },
            { label: 'Units' },
            { label: 'Devices' },
            { label: 'Monthly' },
            { label: 'Live' },
            { label: 'Export' },
            { label: 'Account' },
            {
                label: 'Manage',
                listProps: {
                    mt: 1,
                    liProps: { p: 1, hoverBg: 'blue', hoverColor: 'white', pl: 2 }
                },
                items: [
                    { label: 'Users' },
                    { label: 'Devices' },
                    { label: 'Partners' },
                    { label: 'Units' }
                ]
            }
        ]
    }
};
