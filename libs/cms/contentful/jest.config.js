const config = require('@ring/config-jest/node');

module.exports = {
  ...config,

  coveragePathIgnorePatterns: [...config.coveragePathIgnorePatterns, 'src/components/sections'],

  moduleNameMapper: {
    ...config.moduleNameMapper,
    '^@ring/commerce(.*)$': '<rootDir>/../../commerce/swell$1',
  },
};
