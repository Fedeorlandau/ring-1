const config = require('@ring/config-eslint/_base');

module.exports = {
  ...config,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
