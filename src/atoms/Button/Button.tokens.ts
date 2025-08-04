export const buttonTokens = {
  base: 'group inline-flex justify-center items-center rounded-md transition-colors duration-200 select-none whitespace-nowrap font-semibold',
  icon: {
    base: ' shrink-0',
    disabled: 'opacity-50 cursor-not-allowed',
    parent: 'justify-between gap-[5px]',
  },
  sizes: {
    medium: {
      fontSize: 'text-body-12',
      padding: 'px-[14px] py-[10px]',
    },
    small: {
      fontSize: 'text-body-10',
      padding: 'px-4 py-2',
    },
    large: {
      fontSize: 'text-body-16',
      padding: 'px-8 py-3',
    },
  },
  variants: {
    primary: {
      base: 'bg-gradient  text-white',
      // base: 'bg-primary-50 text-white ',
      active: 'active:scale-95 active:brightness-90 transition duration-100',
      focus: 'focus:ring-blue-50',
      hover: 'hover:bg-primary-40',
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none ',
    },
    outlined: {
      base: 'border-2 border-dark-50 bg-transparent text-dark-50 ',
      active: 'active:scale-95 active:border-primary-40',
      focus: 'focus:ring-primary-40',
      hover: 'hover:border-primary-40 hover:text-primary-40',
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
    secondary: {
      base: 'bg-secondary-50 text-white',
      active: 'active:scale-95 active:brightness-90 transition duration-100',
      focus: 'focus:ring-secondary-50',
      hover: 'hover:bg-secondary-50/90',
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none ',
    },
    error: {
      base: 'bg-error-50 text-white',
      active: 'active:scale-95 active:brightness-90 transition duration-100',
      focus: 'focus:ring-error-50',
      hover: 'hover:bg-error-50/90',
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none ',
    },
  },
}
