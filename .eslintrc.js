module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'import/no-extraneous-dependencies': [2, { devDependencies: true }]
  }
}
