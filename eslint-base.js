module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-namespace': [
      2,
      {
        allowDeclarations: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    eqeqeq: [
      2,
      'always',
      {
        null: 'ignore',
      },
    ],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/imports-first': 2,
    'import/newline-after-import': 2,
    'import/no-anonymous-default-export': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
      },
    ],
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
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
      'WithStatement',
    ],
    'no-underscore-dangle': 0,
    'no-useless-constructor': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'prefer-destructuring': 0,
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'sort-imports': [
      2,
      {
        ignoreDeclarationSort: true,
      },
    ],
    'spaced-comment': 1,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
