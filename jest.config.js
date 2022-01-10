const nextJest = require("next/jest");
const tsconfig = require("./tsconfig.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
  testMatch: ["<rootDir>/**/?(*.)spec.{ts,tsx}"],
  verbose: true,
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper,
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
