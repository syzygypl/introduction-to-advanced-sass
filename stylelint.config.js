const bemSettings = require('stylelint-config-syzygy-bem');
bemSettings['rules']['plugin/selector-bem-pattern']['implicitComponents'] = false;

module.exports = {
  customSyntax: "postcss-scss",
  plugins: [
    'stylelint-scss',
    "stylelint-selector-bem-pattern",
  ],
  extends: [
    'stylelint-config-syzygy-scss',
    'stylelint-config-syzygy-order',
  ],
  ignoreFiles: [],
  'rules': {
    'plugin/selector-bem-pattern': bemSettings['rules']['plugin/selector-bem-pattern'],
  },
};