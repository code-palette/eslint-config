'use strict';

const javascriptPlugin = require('@eslint/js');
const prettierConfig = require('eslint-config-prettier');

const rules = {
  'no-duplicate-imports': 'error',
  'no-promise-executor-return': 'error',
  'no-self-compare': 'error',
  'no-unused-private-class-members': 'error',
  'arrow-body-style': ['error', 'as-needed'],
  'camelcase': 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
  'eqeqeq': ['error', 'smart'],
  'no-confusing-arrow': ['error', { onlyOneSimpleParam: true }],
  'no-continue': 'error',
  'no-multi-assign': 'error',
  'no-param-reassign': 'error',
  'no-return-assign': 'error',
  'no-unneeded-ternary': 'error',
  'no-useless-concat': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'prefer-const': 'error',
  'prefer-object-spread': 'error',
  'symbol-description': 'error',
};

module.exports = {
  rules: {
    ...javascriptPlugin.configs.recommended.rules,
    ...rules,
    ...prettierConfig.rules,
  },
};
