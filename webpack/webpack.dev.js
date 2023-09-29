const port = parseInt(process.env.PORT) || 3000;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    port,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin({overlay: false})],
};
