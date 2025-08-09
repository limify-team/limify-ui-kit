import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import { config, configs } from 'typescript-eslint'

export default config(
  {
    ignores: ['dist', 'lib', 'storybook-static', 'html'],
  },
  {
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslint.configs.recommended,
      ...configs.strict,
      ...configs.stylistic,
      prettierPlugin,
      {
        plugins: {
          'react-hooks': reactHooksPlugin,
          'react-refresh': reactRefreshPlugin,
        },
        rules: {
          'react-hooks/exhaustive-deps': 'error',
          'react-hooks/rules-of-hooks': 'error',
        },
      },
    ],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-await-in-loop': 'error',
      'no-restricted-imports': [
        'error',
        {
          paths: [],
          patterns: [
            {
              group: ['src/molecules/*', 'src/organisms/*'],
              message: 'Atoms should not import Molecules or Organisms.',
            },
            {
              group: ['src/organisms/*'],
              message: 'Molecules should not import Organisms.',
            },
            {
              group: ['src/atoms/*', 'src/molecules/*'],
              message:
                'Organisms should not import components from lower layers directly. Use abstraction where needed.',
            },
          ],
        },
      ],
      'no-unused-expressions': 'error',
      'prefer-destructuring': ['error', { array: false, object: true }],
      'import/order': [
        'error',
        {
          'groups': [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
          ],
          'newlines-between': 'never',
          'alphabetize': { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          message:
            'Use named exports instead of default exports for React components.',
          selector: 'ExportDefaultDeclaration',
        },
      ],
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'no-restricted-syntax': 'off',
    },
  }
)
