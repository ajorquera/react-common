import type { Meta, StoryObj } from '@storybook/react'
import List, { type Props } from './List'

const meta: Meta<Props> = {
  title: 'Components/List',
  component: List,
  decorators: [],
  parameters: {}
}

export default meta

type Story = StoryObj<Props>

export const Default: Story = {
  args: {
    onClick: undefined,
    items: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' }
    ]
  }
}

export const FloatingList: Story = {
  args: {
    border: '1px solid black',
    width: '200px',
    maxHeight: '200px',
    overflowY: 'auto',
    onClick: (args: any) => { console.log(args) },
    liProps: { p: 3, hoverBg: 'blue', hoverColor: 'white' },
    items: [
      { label: 'Item 1', disabled: true },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 4' },
      { label: 'Item 4' },
      { label: 'Item 4' },
      { label: 'Item 4' },
      { label: 'Item 4' }

    ]
  }
}
