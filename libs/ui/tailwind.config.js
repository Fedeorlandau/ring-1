const { tailwindConfig } = require('@ring/ui-tokens');

module.exports = {
  content: ['src/**/*.{ts,tsx}', '../ui-tokens/src/theme.ts'],
  theme: {
    extend: {
      ...tailwindConfig,
    },
  },
};
