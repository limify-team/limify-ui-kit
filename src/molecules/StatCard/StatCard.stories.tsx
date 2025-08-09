import type { Meta } from '@storybook/react'
import { HomeIcon, UsersIcon } from '@/assets/icons'
import { type StatCardStories, StatCard } from '@/molecules'

const meta: Meta<typeof StatCard> = {
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon component to display in the card',
      table: {
        type: { summary: 'SVGElement' },
      },
      type: 'string',
    },
    label: {
      control: { type: 'text' },
      description: 'Label for the statistic',
    },
    count: {
      control: { type: 'text' },
      description:
        'Count value to display, can be a number or a percentage string',
    },
    iconDimensions: {
      control: { type: 'object' },
      description: 'Dimensions for the icon',
    },
  },
  title: 'Design System/Molecules/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export const Default: StatCardStories = {
  args: {
    icon: UsersIcon,
    label: 'Total Users',
    count: 1500,
  },
}
export const WithPercentage: StatCardStories = {
  args: {
    icon: HomeIcon,
    label: 'Total Users',
    count: '98%',
  },
}

export const LargeNumber: StatCardStories = {
  args: {
    icon: HomeIcon,
    label: 'Questions Solved',
    count: '12500',
  },
}

export default meta
