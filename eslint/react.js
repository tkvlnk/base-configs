module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    './base.js',
    'eslint-config-airbnb-typescript',
    'eslint-config-airbnb/hooks',
    'eslint-config-prettier/react',
    './_shared.js'
  ].map(require.resolve),
  plugins: ['react'],
  rules: {
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/no-unused-prop-types': 0
  }
};
