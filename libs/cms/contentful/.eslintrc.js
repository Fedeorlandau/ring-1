const config = require('@ring/config-eslint/node');

module.exports = {
  ...config,
  ignorePatterns: ['src/types/generated/*'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
