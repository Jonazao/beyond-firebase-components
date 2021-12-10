module.exports = {
  plugins: ['sonar'],
  rules: {
    'sonar/deprecation': 1,
  },
  extends: [
    // only one of the following is needed to be enabled
    'plugin:sonar/base',
    'plugin:sonar/recommended',
  ],
};
