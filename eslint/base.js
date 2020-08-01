module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.spec.{ts,tsx}'],
      env: {
        jest: true
      }
    }
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-namespace': [
      2,
      {
        allowDeclarations: true
      }
    ],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    eqeqeq: [
      2,
      'always',
      {
        null: 'ignore'
      }
    ],
    'import/newline-after-import': 2,
    'import/no-anonymous-default-export': 2,
    'import/no-extraneous-dependencies': 0,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'no-await-in-loop': 0,
    'no-continue': 0,
    'no-debugger': 1,
    'no-empty-function': 0,
    'no-loop-func': 0,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-underscore-dangle': 0,
    'no-useless-constructor': 0,
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'prefer-destructuring': 0,
    'prettier/prettier': 1,
    'sort-imports': [
      2,
      {
        ignoreDeclarationSort: true
      }
    ],
    'spaced-comment': 1
  }
};
