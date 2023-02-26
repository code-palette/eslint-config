"use strict";

const configPrettier = require("eslint-config-prettier");
const pluginNoNull = require("eslint-plugin-no-null");

const baseConfigs = ["eslint:recommended"];

const overrideConfigs = [configPrettier];

const plugins = {
  "no-null": pluginNoNull,
};

const rules = {
  "no-null/no-null": "error",
};

module.exports = [
  ...baseConfigs,
  {
    plugins,
    rules,
  },
  ...overrideConfigs,
];
