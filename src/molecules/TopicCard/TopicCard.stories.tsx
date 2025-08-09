import type { Meta } from '@storybook/react'
import { AwardIcon, BrainIcon } from '@/assets/icons'
import { type TopicCardStories, TopicCard } from '@/molecules'

const meta: Meta<typeof TopicCard> = {
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon component to display in the card',
      table: {
        type: { summary: 'SVGElement' },
      },
      type: 'function',
    },
    title: {
      control: { type: 'text' },
      description: 'Title for the card',
    },
    description: {
      control: { type: 'text' },
      description:
        'Optional description for the card, providing additional context or information',
    },
    iconDimensions: {
      control: { type: 'object' },
      description: 'Dimensions for the icon',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'warning', 'success', 'danger'],
      description: 'Visual variant of the card',
      table: {
        type: { summary: 'primary | secondary | warning | success | danger' },
      },
    },
    buttonText: {
      control: { type: 'text' },
      description: 'Text for the button in the card',
    },
  },
  title: 'Design System/Molecules/TopicCard',
  component: TopicCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

const defaultArgs = {
  icon: BrainIcon,
  title: 'Mathematics',
  description: 'Algebra, Geometry, Statistics',
  iconDimensions: { width: 25, height: 25 },
  className: 'w-[450px]',
  buttonText: 'Learn More',
  extraText: '25 tests',
}

export const Default: TopicCardStories = {
  args: {
    ...defaultArgs,
  },
}

export const Secondary: TopicCardStories = {
  args: {
    ...defaultArgs,
    variant: 'secondary',
  },
}

export const Success: TopicCardStories = {
  args: {
    ...defaultArgs,
    variant: 'success',
  },
}
export const Warning: TopicCardStories = {
  args: {
    ...defaultArgs,
    variant: 'warning',
    icon: AwardIcon,
  },
}
export const Danger: TopicCardStories = {
  args: {
    ...defaultArgs,
    variant: 'danger',
  },
}
export default meta
