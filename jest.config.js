// const nextJest = require('next/jest');

// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: './',
// });

// Add any custom config to be passed to Jest
const customJestConfig = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  // roots: ['<rootDir>/__tests__/'],
  globals: {
    __DEV__: true,
  },
  moduleNameMapper: {
    // '^@/(.*)$': '<rootDir>/src/$1',
    // Handle module aliases (this will be automatically configured for you soon)
    // '^@/components/(.*)$': '<rootDir>/components/$1',
    // Handle module aliases
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",

    "^@/(.*)$": "<rootDir>/$1",
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
    "^configs/(.*)$": "<rootDir>/src/configs/$1",

    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.svg$": "<rootDir>/__mocks__/svgTransform.js",
  },
  moduleDirectories: ["node_modules", __dirname],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = customJestConfig;
