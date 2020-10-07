const { tsRules, jsRules } = require('./_rules');

module.exports = {
  extends: ['prettier', 'prettier/@typescript-eslint'],
  plugins: ['prettier'],
  rules: {
    ...tsRules,
    ...jsRules
  }
};
