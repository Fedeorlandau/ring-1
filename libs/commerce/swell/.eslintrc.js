const config = require('@ring/config-eslint/node');

module.exports = {
  ...config,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
