import type { Meta } from '@storybook/react'
import { headingTokens } from './Heading.tokens'
import { Heading, headingTokens as tokens, type HeadingStory } from '@/atoms'

const meta: Meta<typeof Heading> = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(headingTokens.variants),
      description: 'The variant of the heading',
      table: {
        type: { summary: Object.keys(tokens.variants).join('|') },
      },
    },
    className: {
      control: 'text',
      description: 'Additional Tailwindcss classes to apply to the heading',
    },
    children: {
      control: 'text',
      description: 'Text content of the heading',
      table: {
        type: { summary: 'ReactNode' },
      },
      type: 'string',
    },
  },
  title: 'Design System/Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export const Default: HeadingStory = {
  args: {
    children: 'Heading',
  },
}

export const H1: HeadingStory = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
}

export const H2: HeadingStory = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
}
export const H3: HeadingStory = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
}

export const H4: HeadingStory = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
}

export const H5: HeadingStory = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
}

export const H6: HeadingStory = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
}

export default meta
