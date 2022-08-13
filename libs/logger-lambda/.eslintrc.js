const base = require('@ring/config-eslint/_base');

module.exports = {
  ...base,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
