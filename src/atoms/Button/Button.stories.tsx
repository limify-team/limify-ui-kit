import { HomeIcon } from '@/assets/icons';
import { Button, type ButtonStory, buttonTokens as tokens } from '@/atoms';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Button> = {
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content of the button',
      table: {
        type: { summary: 'ReactNode' },
      },
      type: 'string',
    },
    className: {
      control: 'text',
      description: 'Additional tailwind classes for styling',
      table: {
        type: { summary: 'ClassValue' },
      },
      type: 'string',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and prevents user interaction.',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'boolean' },
      },
      type: 'boolean',
    },
    icon: {
      control: 'text',
      description: 'Icon inside button',
      table: {
        type: { summary: 'SVGElement' },
      },
      type: 'string',
    },
    onClick: {
      action: 'clicked',
      description: 'Function to handle button clicks.',
      table: {
        type: { summary: '() => void' },
      },
      type: 'function',
    },
    outlined: {
      control: 'boolean',
      description: 'Makes button outlined.',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'boolean' },
      },
      type: 'boolean',
    },
    size: {
      control: 'select',
      description: 'The button size for different padding and font styles.',
      options: Object.keys(tokens.sizes),
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: Object.keys(tokens.sizes).join('|') },
      },
    },
    variant: {
      control: 'select',
      description: 'The button variant for different visual styles.',
      options: Object.keys(tokens.variants),
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: Object.keys(tokens.variants).join('|') },
      },
    },
  },
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

export const Secondary: ButtonStory = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Success: ButtonStory = {
  args: {
    children: 'Button',
    variant: 'success',
    size: 'medium',
  },
};
export const Danger: ButtonStory = {
  args: {
    children: 'Button',
    variant: 'danger',
    size: 'medium',
  },
};
export const OutlinedDefault: ButtonStory = {
  args: {
    children: 'Button',
    outlined: true,
    icon: HomeIcon,
  },
};

export const OutlinedSecondaryVariant: ButtonStory = {
  args: {
    children: 'Button',
    outlined: true,
    variant: 'secondary',
  },
};
export const OutlinedDangerVariant: ButtonStory = {
  args: {
    children: 'Button',
    outlined: true,
    variant: 'danger',
  },
};
export const OutlinedSuccessVariant: ButtonStory = {
  args: {
    children: 'Button',
    outlined: true,
    variant: 'success',
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

export const WithIcon: ButtonStory = {
  args: {
    children: 'Button',
    icon: HomeIcon,
  },
};
export const IconButton: ButtonStory = {
  args: {
    icon: HomeIcon,
  },
};
export const IconButtonOutlined: ButtonStory = {
  args: {
    icon: HomeIcon,
    outlined: true,
  },
};
export const Disabled: ButtonStory = {
  args: {
    children: 'Button',
    disabled: true,
  },
};
