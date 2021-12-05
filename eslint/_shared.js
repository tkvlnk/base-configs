const { tsRules, jsRules } = require('./_rules');

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    ...tsRules,
    ...jsRules
  }
};
