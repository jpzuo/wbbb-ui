module.exports = {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['dist/**', 'coverage/**', 'node_modules/**', 'unpackage/**'],
  rules: {
    'alpha-value-notation': null,
    'color-function-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-single-line-max-declarations': null,
    'declaration-empty-line-before': null,
    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
    'selector-class-pattern': '^halo-[a-z0-9-]+(__[a-z0-9-]+)?(--[a-z0-9-]+)?$',
    'selector-type-no-unknown': [true, { ignoreTypes: ['page'] }],
    'scss/at-extend-no-missing-placeholder': null,
    'scss/dollar-variable-pattern': '^halo-[a-z0-9-]+$',
    'scss/load-partial-extension': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }]
  }
}
