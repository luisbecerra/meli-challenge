module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/tests/**",
    "!**/coverage/**",
    "!**/.next/**",
    "!jest.config.js",
  ],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: [
    "/.next/",
    "/node_modules/",
    "/tests/",
    "/coverage/",
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
  },
};
