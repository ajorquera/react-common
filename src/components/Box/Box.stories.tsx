import Box, { type Props } from './Box'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<Props> = {
  title: 'Components/Box',
  component: Box,
  decorators: [],
  parameters: {}
}

export default meta

type Story = StoryObj<Props>

export const Default: Story = {
  args: {
    children: 'Box',
    border: '1px solid black',
    display: 'inline-block',
    p: 3,
    hoverBg: 'red',
    hoverColor: 'yellow'
  }
}
