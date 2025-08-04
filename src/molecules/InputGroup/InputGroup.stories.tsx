import { Meta, StoryObj } from '@storybook/react'

import { InputGroup } from './InputGroup'
 const meta:Meta<typeof InputGroup> = {
  title: 'Design System/Molecules/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
}
export default meta;

type Story = StoryObj<typeof InputGroup>;
export const Default:Story = {
  render: () => <InputGroup />,
};