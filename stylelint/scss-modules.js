const {
  rules: { 'order/properties-order': propertiesGroups }
} = require('stylelint-config-recess-order');

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-css-modules',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': null,
    'declaration-empty-line-before': null,
    'declaration-colon-newline-after': null,
    'prettier/prettier': true,
    'selector-class-pattern': '^_?[a-z][A-z]+$',
    'order/properties-order': propertiesGroups.map((group) => ({
      ...group,
      emptyLineBefore: 'always',
      noEmtyLineBetween: true
    })),
    'value-keyword-case': null
  }
};
