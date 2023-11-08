import { MultipleComponentsTemplate } from '../../StoryTemplates';
import Box, { type Props } from './Box';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
    title: 'Components/Box',
    component: MultipleComponentsTemplate(Box),
    decorators: [],
    parameters: {}
};

export default meta;

type Story = StoryObj<{ items: Props[] }>;

export const Default: Story = {
    args: {
        items: [
            {
                children: 'Box',
                border: '1px solid black',
                display: 'inline-block',
                p: 3,
                hoverBg: 'red',
                hoverColor: 'yellow'
            },
            {
                children: 'Bigger Box',
                width: 200,
                height: 200,
                ml: 3,
                border: '1px solid blue',
                display: 'inline-block',
                p: 3,
                hoverBg: 'green',
                hoverColor: 'red',
                color: 'white',
                bg: 'blue'
            }

        ]
    }
};
