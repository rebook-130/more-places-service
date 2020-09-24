// Jest configuration file

module.exports = {
  // Automatically clear all mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected, Coverage tells what % of code is being covered by test cases
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file to tell Jest which files it can test
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // The path from where it can get config for enzyme
  setupFiles: ['./enzyme.config.js'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files, testing all files in any folder named tests or end with spec/test.js
  testMatch: ['**/tests/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // Ignore files for Jest to pass over
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['./node_modules/'],

  // Indicates whether each individual test should be reported during the run
  verbose: false
};