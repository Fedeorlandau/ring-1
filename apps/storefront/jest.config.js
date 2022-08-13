const config = require('@ring/config-jest/next');

module.exports = {
  ...config,

  moduleNameMapper: {
    ...config.moduleNameMapper,
    '^@ring/cms(.*)$': '<rootDir>/../../libs/cms/contentful$1',
    '^@ring/commerce(.*)$': '<rootDir>/../../libs/commerce/swell$1',
  },
};
