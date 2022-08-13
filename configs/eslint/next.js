const base = require('./_base');
const react = require('./react');

module.exports = {
  ...react,
  env: {
    ...react.env,
    browser: true,
  },
  extends: [
    // https://nextjs.org/docs/basic-features/eslint
    'next/core-web-vitals',

    'plugin:testing-library/react',

    // extend the base to do not include airbnb rules
    ...base.extends,
  ],
  rules: {
    ...react.rules,
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // NextJS rules
    '@next/next/no-img-element': 'off',
  },
  overrides: [
    {
      files: ['**/src/pages/**'],
      rules: {
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'import/no-default-export': 'off',
      },
    },
  ],
};
