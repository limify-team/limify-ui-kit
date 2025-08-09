import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import * as stories from './Heading.stories'

const { Default, H1, H2, H3, H4, H5, H6 } = composeStories(stories)

describe('Heading Component', () => {
  it('renders Default Heading', () => {
    const { getByText } = render(<Default />)
    expect(getByText('Heading')).toBeInTheDocument()
  })

  it('renders H1 Heading', () => {
    const { getByText } = render(<H1 />)
    expect(getByText('Heading 1')).toBeInTheDocument()
    expect(getByText('Heading 1')).toHaveClass('text-h1')
  })

  it('renders H2 Heading', () => {
    const { getByText } = render(<H2 />)
    expect(getByText('Heading 2')).toBeInTheDocument()
    expect(getByText('Heading 2')).toHaveClass('text-h2')
  })

  it('renders H3 Heading', () => {
    const { getByText } = render(<H3 />)
    expect(getByText('Heading 3')).toBeInTheDocument()
    expect(getByText('Heading 3')).toHaveClass('text-h3')
  })

  it('renders H4 Heading', () => {
    const { getByText } = render(<H4 />)
    expect(getByText('Heading 4')).toBeInTheDocument()
    expect(getByText('Heading 4')).toHaveClass('text-h4')
  })

  it('renders H5 Heading', () => {
    const { getByText } = render(<H5 />)
    expect(getByText('Heading 5')).toBeInTheDocument()
    expect(getByText('Heading 5')).toHaveClass('text-h5')
  })

  it('renders H6 Heading', () => {
    const { getByText } = render(<H6 />)
    expect(getByText('Heading 6')).toBeInTheDocument()
    expect(getByText('Heading 6')).toHaveClass('text-h6')
  })
})
