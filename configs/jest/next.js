const config = require('./react');

module.exports = {
  ...config,

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [...config.coveragePathIgnorePatterns, 'src/pages/_app'],

  // A map from regular expressions to paths to transformers
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};
