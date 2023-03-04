'use strict';

const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const prettierConfig = require('eslint-config-prettier');
const javascriptConfig = require('./javascript');

module.exports = {
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  languageOptions: {
    parser: typescriptParser,
  },
  rules: {
    ...javascriptConfig.rules,
    ...typescriptPlugin.configs['eslint-recommended'].overrides[0].rules,
    ...typescriptPlugin.configs.recommended.rules,
    ...prettierConfig.rules,
  },
};
