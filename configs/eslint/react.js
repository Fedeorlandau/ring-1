const base = require('./_base');

module.exports = {
  ...base,
  plugins: [...base.plugins, 'testing-library'],
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb
    'airbnb',
    'airbnb/hooks',
    // 'airbnb-typescript',

    'plugin:testing-library/react',

    ...base.extends,
  ],
  rules: {
    ...base.rules,

    // https://www.npmjs.com/package/eslint-plugin-react
    'react/destructuring-assignment': 'error',
    'react/forbid-component-props': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'error',
    'react/jsx-sort-props': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
};
