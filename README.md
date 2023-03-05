# @code-palette/eslint-config

## Installation
```
npm install --save-dev @code-palette/eslint-config
```

## Usage
```js
const javascriptConfig = require("@code-palette/eslint-config/javascript");
const typescriptConfig = require("@code-palette/eslint-config/typescript");

module.exports = [
  {
    ...javascriptConfig,
    files: ["./src/**/*.js"],
  },
  {
    ...typescriptConfig,
    files: ["./src/**/*.ts"],
  },
];
```