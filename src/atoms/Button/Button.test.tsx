import { composeStories } from '@storybook/react';
import { cleanup, render, screen } from '@testing-library/react';
import * as story from './Button.stories';

const { Default, WithIcon, Outlined, Error, Secondary, LargeSize } =
  composeStories(story);

describe('Button component', () => {
  afterAll(() => {
    cleanup();
  });
  it('Render primary Button correctly', () => {
    render(<Default />);
    const button = screen.getByText('Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gradient');
  });

  it('Render secondary Button correctly', () => {
    render(<Secondary />);
    const button = screen.getByText('Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-secondary-50');
  });

  it('Render outlined Button correctly', () => {
    render(<Outlined />);
    const button = screen.getByText('Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('border-2 border-dark-50 bg-transparent');
  });

  it('Render error Button correctly', () => {
    render(<Error />);
    const button = screen.getByText('Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-error-50');
  });

  it('Render Button with icon  correctly', () => {
    render(<WithIcon />);
    const button = screen.getByText('Button');
    const icon = screen.getByLabelText('icon');
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
  it('Render large Button correctly', () => {
    render(<LargeSize />);
    const button = screen.getByText('Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('text-body-16');
  });

  it('Render handle click events correctly', () => {
    const handleClick = vi.fn();
    render(<Default onClick={handleClick} />);
    const button = screen.getByText('Button');
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
