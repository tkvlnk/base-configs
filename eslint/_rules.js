const prettierConfig = require('../prettier/base');

const tsRules = {
  '@typescript-eslint/ban-ts-ignore': 0,
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/explicit-member-accessibility': 0,
  '@typescript-eslint/no-empty-function': 0,
  '@typescript-eslint/no-empty-interface': 0,
  '@typescript-eslint/no-explicit-any': 2,
  '@typescript-eslint/no-floating-promises': [
    2,
    {
      ignoreVoid: true,
      ignoreIIFE: true
    }
  ],
  '@typescript-eslint/no-misused-promises': [
    2,
    {
      checksVoidReturn: false
    }
  ],
  '@typescript-eslint/no-namespace': [
    2,
    {
      allowDeclarations: true
    }
  ],
  '@typescript-eslint/no-use-before-define': [
    2,
    {
      functions: false
    }
  ],
  '@typescript-eslint/no-unnecessary-type-assertion': 0,
  '@typescript-eslint/restrict-template-expressions': 0,
  '@typescript-eslint/unbound-method': 0,
  '@typescript-eslint/no-unused-vars': [
    2,
    {
      args: 'after-used',
      ignoreRestSiblings: true
    }
  ],
  '@typescript-eslint/no-shadow': 2,
  'no-shadow': 0,
  'no-undef': 0
};

const jsRules = {
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
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
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
  'no-empty': [2, { allowEmptyCatch: true }],
  'no-loop-func': 0,
  'no-prototype-builtins': 0,
  'no-restricted-syntax': [
    2,
    'ForInStatement',
    'LabeledStatement',
    'WithStatement'
  ],
  'no-underscore-dangle': 0,
  'no-use-before-define': 0,
  'no-useless-constructor': 0,
  'no-param-reassign': [
    2,
    {
      props: false
    }
  ],
  'no-void': [
    2,
    {
      allowAsStatement: true
    }
  ],
  'prefer-destructuring': 0,
  'prettier/prettier': [1, prettierConfig],
  'sort-imports': [
    2,
    {
      ignoreDeclarationSort: true
    }
  ],
  'spaced-comment': 1
};

module.exports = {
  jsRules,
  tsRules
};
