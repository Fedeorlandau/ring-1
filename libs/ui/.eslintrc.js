const config = require('@ring/config-eslint/react');

module.exports = {
  ...config,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: ['plugin:storybook/recommended', ...config.extends],
  rules: {
    ...config.rules,

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*', '**/*.test.*', '**/run*Test.*'],
        peerDependencies: true,
      },
    ],
  },
  overrides: [
    ...config.overrides,
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
        'import/no-default-export': 'off',
        'storybook/story-exports': 'off',
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['*.test.@(ts|tsx)'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
