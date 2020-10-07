const { jsRules } = require('./_rules');

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: { ...jsRules },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: [
        'airbnb-base',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        './_shared.js'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      overrides: [
        {
          files: ['*.{spec,test}.{ts,tsx}', '__tests__/**/*.{ts,tsx}'],
          env: {
            jest: true
          },
          extends: ['plugin:jest/recommended']
        }
      ],
      plugins: ['@typescript-eslint', 'import', 'prettier'],
      rules: {
        'import/extensions': [
          2,
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            ts: 'never'
          }
        ]
      }
    }
  ]
};
