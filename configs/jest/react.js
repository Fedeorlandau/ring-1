const config = require('./_base');

module.exports = {
  ...config,

  testEnvironment: 'jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};
