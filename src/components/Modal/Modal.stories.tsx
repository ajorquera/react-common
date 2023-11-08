import BaseModal, { type Props as BaseModalProps } from './components/BaseModal';

import { ModalComponentTemplate } from '../../StoryTemplates';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<BaseModalProps> = {
    title: 'Components/Modal',
    component: ModalComponentTemplate(BaseModal),
    decorators: [],
    parameters: {}
};

export default meta;

type Story = StoryObj<BaseModalProps>;

export const Info: Story = {
    args: {
        title: 'Modal Title',
        children: 'Here goes the content of the modal'
    }
};
