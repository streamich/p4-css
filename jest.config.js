module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  setupFiles: ['<rootDir>//setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  transformIgnorePatterns: [],
  testRegex: '.*/__tests__/.*\.(test|spec)\.(jsx?|tsx?)$',
};
