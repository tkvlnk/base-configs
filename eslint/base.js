module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-plugin-import/config/recommended',
    'eslint-plugin-import/config/typescript',
    '@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended',
    '@typescript-eslint/eslint-plugin/dist/configs/recommended',
    '@typescript-eslint/eslint-plugin/dist/configs/recommended-requiring-type-checking',
    './_shared.js'
  ].map(require.resolve),
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
};
