// Jest configuration file

module.exports = {
  // Automatically clear all mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file to tell Jest which files it can test
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // The path from where it can get config for enzyme
  setupFilesAfterEnv: ['jest-enzyme'],

  // The test environment that will be used for testing
  testEnvironment: 'enzyme',

  testEnvironmentOptions: {
    enzymeAdapter: 'react-16'
  },
  // A map from regular expressions to paths to transformers. Transformer: module that provides a synchronous function for transforming source files
  transform: {
    '^.+\\.jsx$': 'babel-jest'
  }
};