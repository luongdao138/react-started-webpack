module.exports = {
  mode: 'production',
  devtool: 'source-map',

  // TODO: @luongdao temporary bypass performance problem
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
