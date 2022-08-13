module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: ['**/*.js', '**/*.json', 'dist', 'next', '.turbo', 'coverage', 'node_modules'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'import', 'jest', 'jest-dom', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',

    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',

    /**
     * Make sure to put prettier last, so it gets the chance to override other
     * configs.
     *
     * @see https://github.com/prettier/eslint-config-prettier
     */
    'prettier',
  ],
  rules: {
    // ESLint rules
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'func-style': ['error', 'declaration'],
    'no-console': 'warn',
    'no-use-before-define': 'off',

    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // https://www.npmjs.com/package/eslint-plugin-import
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'off',
      { devDependencies: ['**/?(*.)+(spec|test|e2e-spec|mocks).[jt]s?(x)'] },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'always', { ts: 'never', tsx: 'never', js: 'never' }],

    // https://www.npmjs.com/package/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // https://www.npmjs.com/package/eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': 'error',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test|e2e-spec).[jt]s?(x)'],
      extends: [
        // https://www.npmjs.com/package/eslint-plugin-jest
        'plugin:jest/recommended',
        'plugin:jest/style',

        // https://github.com/testing-library/eslint-plugin-jest-dom
        'plugin:jest-dom/recommended',
      ],
    },
  ],
};
