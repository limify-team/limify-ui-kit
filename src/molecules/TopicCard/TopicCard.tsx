import type { FC } from 'react'
import { ArrowRightIcon } from '@/assets/icons'
import { Button, Heading } from '@/atoms'
import type { TopicCardProps } from '@/molecules'
import { topicCardTokens as tokens } from '@/molecules'
import { cn } from '@/utils/twMerge'

export const TopicCard: FC<TopicCardProps> = ({
  icon: Icon,
  title,
  description,
  iconDimensions = { width: 25, height: 25 },
  className = '',
  variant = 'primary',
  buttonText,
  onButtonClick,
  extraText,
}) => {
  const varinatStyle = tokens.variant[variant]
  // const iconStyle = tokens.icon[variant]
  // const extraTextStyle = tokens.extraTextVariant[variant]
  return (
    <div className={cn(tokens.card, varinatStyle, className)}>
      <div className={tokens.cardHeader}>
        <div className={tokens.cardHeaderLeft}>
          {/* <div className={tokens.iconWrapper}> */}
          <Icon
            className={`shrink-0`}
            width={iconDimensions.width}
            height={iconDimensions.height}
            aria-label="icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
          />
          {/* </div> */}
          <div>
            <Heading variant="h6">{title}</Heading>
            <p className={tokens.description}>{description}</p>
          </div>
        </div>
        {extraText && <span className={cn(tokens.extraText)}>{extraText}</span>}
      </div>
      {buttonText && (
        <div className="w-full">
          <Button
            variant="ghost"
            className="w-full"
            icon={ArrowRightIcon}
            iconPosition="right"
            onClick={onButtonClick}
            iconDimensions={{ width: 14, height: 14 }}
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  )
}
