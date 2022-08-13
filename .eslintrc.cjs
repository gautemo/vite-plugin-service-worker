/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'prettier', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: true,
    node: true,
  }
}
