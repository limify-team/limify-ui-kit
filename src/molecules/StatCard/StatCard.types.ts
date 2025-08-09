import type { StoryObj } from '@storybook/react'
import type { FunctionComponent, ReactNode, SVGProps } from 'react'
import type { StatCard } from './StatCard'

export type StatCardProps = {
  count: number | string
  label: ReactNode
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  iconDimensions?: { height: number; width: number }
  className?: string
}
export type StatCardStories = StoryObj<typeof StatCard>
