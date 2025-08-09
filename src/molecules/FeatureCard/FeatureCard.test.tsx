import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import * as stories from './FeatureCard.stories'

const { Default, Secondary, Success, Warning } = composeStories(stories)
const mockIcon = () => <svg data-testid="mock-icon" />

describe('Feature Component', () => {
  it('Render default FeatureCard currectly', () => {
    render(
      <Default
        icon={mockIcon}
        title="default"
        description="default description"
      />
    )
    expect(screen.getByText('default')).toBeInTheDocument()
    expect(screen.getByText('default description')).toBeInTheDocument()
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
  })

  it('Render secondary FeatureCard currectly', () => {
    render(
      <Secondary
        icon={mockIcon}
        title="secondary"
        description="secondary description"
      />
    )
    expect(screen.getByText('secondary')).toBeInTheDocument()
    expect(screen.getByText('secondary description')).toBeInTheDocument()
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
  })

  it('Render success FeatureCard currectly', () => {
    render(
      <Success
        icon={mockIcon}
        title="success"
        description="success description"
      />
    )
    expect(screen.getByText('success')).toBeInTheDocument()
    expect(screen.getByText('success description')).toBeInTheDocument()
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
  })

  it('Render warning FeatureCard currectly', () => {
    render(
      <Warning
        icon={mockIcon}
        title="warning"
        description="warning description"
      />
    )
    expect(screen.getByText('warning')).toBeInTheDocument()
    expect(screen.getByText('warning description')).toBeInTheDocument()
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
  })
})
