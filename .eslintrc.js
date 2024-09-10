module.exports = {
  extends: ['@andre-brdoch', 'prettier'],
  parser: undefined,
  plugins: ['html'],
  env: { browser: true, node: true },
  ignorePatterns: ['!eslintrc.js', '!.prettierrc.js', 'node_modules'],
}
