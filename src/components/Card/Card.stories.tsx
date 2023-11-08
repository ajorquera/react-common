import { MultipleComponentsTemplate } from '../../StoryTemplates';
import Card, { type Props } from './Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: MultipleComponentsTemplate(Card),
    decorators: [],
    parameters: {}
};

export default meta;

type Story = StoryObj<{ items: Props[] }>;

export const Default: Story = {
    args: {
        items: [
            {
                children: 'Card'
            },
            {
                children: '2nd Card'
            }
        ]
    }
};
