const config = require('@ring/config-jest/node');

module.exports = {
  ...config,

  moduleNameMapper: {
    ...config.moduleNameMapper,
    '^@ring/commerce(.*)$': '<rootDir>/../../commerce/swell$1',
  },
};
