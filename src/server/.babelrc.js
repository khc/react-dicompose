module.exports = {
  presets: [['@babel/preset-env', {
    targets: {
      node: 'current',
    },
  }]],
  env: {
    production: {
      presets: ['minify']
    }
  }
};
