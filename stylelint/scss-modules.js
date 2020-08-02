module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order',
    'stylelint-config-css-modules',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-config-rational-order/plugin',
    'stylelint-prettier'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'declaration-empty-line-before': null,
    'declaration-colon-newline-after': null,
    'plugin/rational-order': [
      true,
      {
        'empty-line-between-groups': true
      }
    ],
    'prettier/prettier': true,
    'value-keyword-case': null
  }
};
