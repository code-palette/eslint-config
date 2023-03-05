'use strict';

const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const rxjsPlugin = require('eslint-plugin-rxjs');
const prettierConfig = require('eslint-config-prettier');
const javascriptConfig = require('./javascript');

const rules = {
  'rxjs/finnish': 'error',
};

module.exports = {
  plugins: {
    '@typescript-eslint': typescriptPlugin,
    'rxjs': rxjsPlugin,
  },
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: 'tsconfig.json',
    },
  },
  rules: {
    ...javascriptConfig.rules,
    ...typescriptPlugin.configs['eslint-recommended'].overrides[0].rules,
    ...typescriptPlugin.configs.recommended.rules,
    ...typescriptPlugin.configs['recommended-requiring-type-checking'].rules,
    ...rxjsPlugin.configs.recommended.rules,
    ...rules,
    ...prettierConfig.rules,
  },
};
