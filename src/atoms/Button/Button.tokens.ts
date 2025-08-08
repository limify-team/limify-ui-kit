export const buttonTokens = {
  base: 'group inline-flex justify-center  items-center rounded-md transition-colors duration-200 select-none whitespace-nowrap font-medium',
  icon: {
    base: ' shrink-0',
    disabled: 'opacity-50 cursor-not-allowed',
    parent: 'justify-between gap-[5px]',
  },
  outlined: {
    primary:
      'border border-gray-30 bg-transparent text-gray-50 active:scale-95 hover:bg-transparent hover:border-gray-50  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    success:
      'border border-success-30 text-success-50 active:scale-95  hover:bg-success-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    secondary:
      'border border-secondary-30 text-secondary-50 active:scale-95  hover:bg-secondary-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    danger:
      'border border-error-30 text-error-50 active:scale-95 hover:bg-error-50/90 disabled:opacity-50 hover:bg-error-20 disabled:cursor-not-allowed disabled:pointer-events-none',
  },
  sizes: {
    medium: {
      fontSize: 'text-body-14',
      padding: 'px-4 py-2',
      height: 'h-10',
    },
    small: {
      fontSize: 'text-body-10',
      padding: 'px-3 py-2',
      height: 'h-8',
    },
    large: {
      fontSize: 'text-body-16',
      padding: 'px-8 py-2 h-11',
      height: 'h-11',
    },
  },
  variants: {
    primary: {
      base: 'bg-primary-40 text-white',
      active: 'active:scale-95 active:brightness-90 transition duration-100',
      focus: 'focus:ring-blue-50',
      hover: 'hover:bg-primary-40/90',
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none ',
    },

    success: {
      base: 'bg-success-50 text-white',
      active: 'active:scale-95 active:brightness-90 transition duration-100',
      focus: 'focus:ring-success-50',
      hover: 'hover:bg-success-50/90',
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none ',
    },
    secondary: {
      base: 'bg-secondary-50 text-white',
      active: 'active:scale-95 active:brightness-90 transition duration-100',
      focus: 'focus:ring-secondary-50',
      hover: 'hover:bg-secondary-50/90',
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none ',
    },
    danger: {
      base: 'bg-error-50 text-white',
      active: 'active:scale-95 active:brightness-90 transition duration-100',
      focus: 'focus:ring-error-50',
      hover: 'hover:bg-error-50/90',
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none ',
    },
  },
};
