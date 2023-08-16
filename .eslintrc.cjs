/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 6
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/multi-word-component-names': 0,
    'no-console': ['error'],
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'no-trailing-spaces': 'error',
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    'keyword-spacing': ['error', { 'before': true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': [
      'error',
      'never',
      {
        'objectsInArrays': false
      }
    ]
  }
};