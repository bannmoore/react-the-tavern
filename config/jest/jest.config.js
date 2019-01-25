module.exports = {
  rootDir: '../../',

  setupTestFrameworkScriptFile: '<rootDir>/config/jest/setup.js',
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.jsx', '!src/App.jsx'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
  ],
  transform: {
    // handle babel language features in components
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    // ignore css and other file imports
    '^.+\\.css$': '<rootDir>/config/jest/transformImport.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)':
      '<rootDir>/config/jest/transformImport.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$']
}
