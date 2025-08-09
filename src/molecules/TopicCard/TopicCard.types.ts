import type { StoryObj } from '@storybook/react'
import type { FunctionComponent, SVGProps } from 'react'
import type { TopicCard } from './TopicCard'
import type { topicCardTokens as tokens } from './TopicCard.tokens'

export type TopicCardVariant = typeof tokens.variant

export type TopicCardProps = {
  title: string
  description?: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  iconDimensions?: { height: number; width: number }
  className?: string
  variant?: keyof TopicCardVariant
  buttonText?: string
  onButtonClick?: () => void
  extraText?: string
}
export type TopicCardStories = StoryObj<typeof TopicCard>
