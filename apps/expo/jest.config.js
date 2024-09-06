module.exports = {
  verbose: false,
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/utils/testUtils/__mocks__/svgMock.js"
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.types.ts"
  ],
  setupFiles: ["<rootDir>/src/setupTestBeforeEnv.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
  coverageThreshold: {
    global: {
      statements: 1,
      branches: 1,
      lines: 1,
      functions: 1
    }
  },
  fakeTimers: {
    enableGlobally: true,
    advanceTimers: true
  }
};
