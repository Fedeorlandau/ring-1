const { tailwindConfig } = require('@ring/ui-tokens');
module.exports = {
  content: ['../../libs/ui/**/*.tsx', '../../libs/ui-tokens/src/theme.ts'],
  theme: {
    extend: {
      ...tailwindConfig,
    },
  },
};
