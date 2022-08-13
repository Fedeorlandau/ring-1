const next = require('@ring/config-eslint/next');

module.exports = {
  ...next,
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
