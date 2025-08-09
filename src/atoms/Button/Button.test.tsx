import { composeStories } from '@storybook/react'
import { cleanup, render, screen } from '@testing-library/react'
import * as story from './Button.stories'

const { Default, WithIcon, OutlinedDefault, Danger, Secondary, LargeSize } =
  composeStories(story)

describe('Button component', () => {
  afterAll(() => {
    cleanup()
  })
  it('Render primary Button correctly', () => {
    render(<Default />)
    const button = screen.getByText('Button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary-40 text-white')
  })

  it('Render secondary Button correctly', () => {
    render(<Secondary />)
    const button = screen.getByText('Button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-secondary-50')
  })

  it('Render outlined Button correctly', () => {
    render(<OutlinedDefault />)
    const button = screen.getByText('Button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('border border-gray-30 bg-transparent')
  })

  it('Render error Button correctly', () => {
    render(<Danger />)
    const button = screen.getByText('Button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-error-50')
  })

  it('Render Button with icon  correctly', () => {
    render(<WithIcon />)
    const button = screen.getByText('Button')
    const icon = screen.getByLabelText('icon')
    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
  it('Render large Button correctly', () => {
    render(<LargeSize />)
    const button = screen.getByText('Button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('text-body-16')
  })

  it('Render handle click events correctly', () => {
    const handleClick = vi.fn()
    render(<Default onClick={handleClick} />)
    const button = screen.getByText('Button')
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
