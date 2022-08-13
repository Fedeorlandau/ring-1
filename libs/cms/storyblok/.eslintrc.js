const react = require('@ring/config-eslint/react');

module.exports = {
  ...react,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    ...react.rules,

    'no-underscore-dangle': ['error', { allow: ['_uid'] }],
  },
};
