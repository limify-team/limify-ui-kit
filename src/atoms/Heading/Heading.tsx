import React from 'react'
import { type HeadingProps, headingTokens as tokens } from '@/atoms'
import { cn } from '@/utils/twMerge'

export const Heading: React.FC<HeadingProps> = ({
  children,
  variant = 'h2',
  className = '',
  ...props
}) => {
  const Heading: keyof React.JSX.IntrinsicElements = variant

  return (
    <Heading className={cn(tokens.variants[variant], className)} {...props}>
      {children}
    </Heading>
  )
}
