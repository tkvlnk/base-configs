const { jsRules } = require('./_rules');

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: { ...jsRules },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      env: {
        browser: true,
        es6: true
      },
      extends: [
        './base.js',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier/react',
        './_shared.js'
      ],
      plugins: ['react'],
      rules: {
        'jsx-a11y/label-has-associated-control': 0,
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.jsx', '.tsx'] }
        ],
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'react/no-unused-prop-types': 0
      }
    }
  ]
};
