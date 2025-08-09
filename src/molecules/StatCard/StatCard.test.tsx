import { composeStories } from '@storybook/react'
import { act, render, screen } from '@testing-library/react'
import * as stories from './StatCard.stories'

const MockIcon = () => <svg data-testid="mock-icon" />

const { Default, WithPercentage, LargeNumber } = composeStories(stories)

describe('StatCard Component', () => {
  vi.useFakeTimers()

  it('renders icon, label, and animated number', () => {
    render(<Default icon={MockIcon} label="Users" count={2500} />)

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument()

    expect(screen.getByText('Users')).toBeInTheDocument()

    expect(screen.getByText('0')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByText('2.5K')).toBeInTheDocument()
  })

  it('formats numbers with % correctly', () => {
    render(<WithPercentage icon={MockIcon} label="Progress" count="97%" />)

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByText('97%')).toBeInTheDocument()
  })

  it('formats numbers without decimals if whole number', () => {
    render(<LargeNumber icon={MockIcon} label="Orders" count={1000} />)

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByText('1K')).toBeInTheDocument()
  })
})
