import type { FC } from 'react'
import { Heading } from '@/atoms'
import type { FeatureCardProps } from '@/molecules'
import { featureCardTokens as tokens } from '@/molecules'
import { cn } from '@/utils/twMerge'

export const FeatureCard: FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconDimensions = { width: 25, height: 25 },
  className = '',
  variant = 'primary',
}) => {
  const varinatStyle = tokens.variant[variant]
  const iconStyle = tokens.icon[variant]
  return (
    <div className={cn(tokens.card, className)}>
      <div className={tokens.cardHeader}>
        <div className={cn(tokens.iconWrapper, varinatStyle)}>
          <Icon
            className={`shrink-0 ${iconStyle}`}
            width={iconDimensions.width}
            height={iconDimensions.height}
            aria-label="icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
          />
        </div>
        <Heading variant="h6">{title}</Heading>
      </div>
      <div>
        <p className={tokens.description}>{description}</p>
      </div>
    </div>
  )
}
