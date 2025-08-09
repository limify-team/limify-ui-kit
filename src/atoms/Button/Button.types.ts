import type { StoryObj } from '@storybook/react'
import type { ButtonHTMLAttributes, FunctionComponent, SVGProps } from 'react'
import type { Button } from './Button'
import type { buttonTokens } from './Button.tokens'

export type ButtonVariants = keyof (typeof buttonTokens)['variants']
export type ButtonSizes = keyof (typeof buttonTokens)['sizes']
export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'size'
> & {
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  iconPosition?: 'left' | 'right'
  iconDimensions?: { height: number; width: number }
  size?: ButtonSizes
  variant?: ButtonVariants
  outlined?: boolean
}

export type ButtonStory = StoryObj<typeof Button>
