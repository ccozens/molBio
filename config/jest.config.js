const config = {
  collectCoverage: true,
  collectCoverageFrom: ['./src/components/**'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};

module.exports = config;
