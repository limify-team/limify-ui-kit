import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import * as stories from './TopicCard.stories'

const MockIcon = () => <svg data-testid="mock-icon" />

const { Default } = composeStories(stories)

const defaultArgs = {
  icon: MockIcon,
  title: 'Mathematics',
  description: 'Algebra, Geometry, Statistics',
  buttonText: 'Learn More',
  extraText: '25 tests',
}

describe('TopicCard Component', () => {
  it('render default TopicCard correctly', () => {
    render(<Default {...defaultArgs} />)
    expect(screen.getByText('Mathematics')).toBeInTheDocument()
    expect(
      screen.getByText('Algebra, Geometry, Statistics')
    ).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
    expect(screen.getByText('25 tests')).toBeInTheDocument()
  })
})
