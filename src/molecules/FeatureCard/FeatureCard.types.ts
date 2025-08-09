import type { StoryObj } from '@storybook/react'
import type { FunctionComponent, SVGProps } from 'react'
import type { FeatureCard } from './FeatureCard'
import type { featureCardTokens as tokens } from './FeatureCard.tokens'

export type CardVariant = typeof tokens.variant

export type FeatureCardProps = {
  title: string
  description?: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  iconDimensions?: { height: number; width: number }
  className?: string
  variant?: keyof CardVariant
}
export type FeatureCardStories = StoryObj<typeof FeatureCard>
