import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import type { StatCardProps } from '@/molecules'
import { statCardTokens as tokens } from '@/molecules'
import { cn } from '@/utils/twMerge'

export const StatCard: FC<StatCardProps> = ({
  icon: Icon,
  label,
  count,
  iconDimensions = { width: 25, height: 25 },
  className = '',
}) => {
  const [animatedNumber, setAnimatedNumber] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const rawNumber = parseFloat(String(count).replace(/[^0-9.]/g, ''))
  const staticSuffix = String(count)
    .replace(/[0-9.]/g, '')
    .replace('K', '')

  const formatNumber = (num: number) => {
    if (staticSuffix.includes('%')) {
      return Math.floor(num).toString()
    }
    if (num >= 1000) {
      const formatted = (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)
      return `${formatted}K`
    }
    return num.toFixed(num % 1 === 0 ? 0 : 1)
  }

  useEffect(() => {
    let current = 0
    const increment = rawNumber / 60

    intervalRef.current = setInterval(() => {
      current += increment
      if (current >= rawNumber) {
        current = rawNumber
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
      setAnimatedNumber(current)
    }, 40)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [rawNumber])

  return (
    <div className={cn(tokens.wrapper, className)}>
      <Icon
        className="shrink-0"
        width={iconDimensions.width}
        height={iconDimensions.height}
        aria-label="icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
      />
      <div className="flex flex-col">
        <b className={tokens.counter}>
          {formatNumber(animatedNumber)}
          {staticSuffix}
        </b>
        <span className={tokens.label}>{label}</span>
      </div>
    </div>
  )
}
