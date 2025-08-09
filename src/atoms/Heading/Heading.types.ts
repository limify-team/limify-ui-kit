import type { StoryObj } from '@storybook/react'
import type { Heading } from './Heading'
import type { headingTokens as tokens } from './Heading.tokens'

export type HeadingSizes = keyof (typeof tokens)['variants']

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: HeadingSizes
  className?: string
  children: React.ReactNode
}
export type HeadingStory = StoryObj<typeof Heading>
