import type { Meta } from '@storybook/react'
import { AwardIcon, BrainIcon } from '@/assets/icons'
import { type FeatureCardStories, FeatureCard } from '@/molecules'

const meta: Meta<typeof FeatureCard> = {
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
      options: ['primary', 'secondary', 'warning', 'success'],
      description: 'Visual variant of the card',
      table: {
        type: { summary: 'primary | secondary | warning | success' },
      },
    },
  },
  title: 'Design System/Molecules/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

const defaultArgs = {
  icon: BrainIcon,
  title: 'AI-Powered Feedback',
  description:
    'Get personalized feedback and improvement suggestions from our advanced AI system.',
  iconDimensions: { width: 25, height: 25 },
  className: 'w-[350px]',
}

export const Default: FeatureCardStories = {
  args: {
    ...defaultArgs,
  },
}

export const Secondary: FeatureCardStories = {
  args: {
    ...defaultArgs,
    variant: 'secondary',
  },
}

export const Success: FeatureCardStories = {
  args: {
    ...defaultArgs,
    variant: 'success',
  },
}
export const Warning: FeatureCardStories = {
  args: {
    ...defaultArgs,
    variant: 'warning',
    icon: AwardIcon,
  },
}

export default meta
