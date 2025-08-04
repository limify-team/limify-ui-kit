import { HomeIcon } from '@/assets/icons';
import { Button, type ButtonStory } from '@/atoms';
import type { Meta } from '@storybook/react';
const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

export const Default: ButtonStory = {
  args: {
    children: 'Button',
  },
};
export const WithIcon: ButtonStory = {
  args: {
    children: 'Button',
    icon: HomeIcon,
  },
};
export const Secondary: ButtonStory = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'medium',
  },
};
export const Outlined: ButtonStory = {
  args: {
    children: 'Button',
    variant: 'outlined',
    size: 'medium',
    icon: HomeIcon,
  },
};
export const Error: ButtonStory = {
  args: {
    children: 'Button',
    variant: 'error',
    size: 'medium',
  },
};
export const LargeSize: ButtonStory = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'large',
  },
};
export const SmallSize: ButtonStory = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'small',
  },
};
