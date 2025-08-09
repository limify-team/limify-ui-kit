import { forwardRef } from 'react'
import { buttonTokens as tokens } from './Button.tokens'
import type { ButtonProps } from './Button.types'
import { cn } from '@/utils/twMerge'
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      disabled = false,
      size = 'medium',
      outlined = false,
      icon: Icon,
      iconPosition = 'left',
      variant = 'primary',
      iconDimensions = { width: 18, height: 18 },
      ...props
    },
    ref
  ) => {
    const variantStyles = tokens.variants[variant]
    const sizeStyles = tokens.sizes[size]
    const iconStyles = tokens.icon
    const outlinedStyles = tokens.outlined[variant]
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          tokens.base,
          !disabled && variantStyles.active,
          !disabled && variantStyles.hover,
          variantStyles.focus,
          sizeStyles.fontSize,
          sizeStyles.padding,
          sizeStyles.height,
          disabled && variantStyles.disabled,
          outlined ? outlinedStyles : variantStyles.base,
          !!Icon && iconStyles.parent,
          !!Icon && !children && 'min-w-0',
          className
        )}
        {...props}
      >
        {!!Icon && iconPosition === 'left' && (
          <Icon
            aria-label="icon"
            aria-hidden="true"
            className={cn(iconStyles.base, disabled && iconStyles.disabled)}
            width={iconDimensions.width}
            height={iconDimensions.height}
            viewBox="0 0 20 20"
          />
        )}
        {children}
        {!!Icon && iconPosition === 'right' && (
          <Icon
            aria-label="icon"
            aria-hidden="true"
            className={cn(
              iconStyles.base,
              outlined ? 'fill-dark-50' : 'fill-white',
              disabled && iconStyles.disabled
            )}
            width={iconDimensions.width}
            height={iconDimensions.height}
            viewBox="0 0 20 20"
          />
        )}
      </button>
    )
  }
)
