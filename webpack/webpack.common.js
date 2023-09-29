const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const path = require('path');

module.exports = ({env}) => {
  const isDev = env === 'development';

  return {
    // entry: specify the entry point where webpack starts to bundle
    entry: path.resolve(__dirname, '../src/main.tsx'),

    // resolve: leave off the extension when import modules, for example: instead of import App from './App.tsx', we just need import App from './App'
    // with this example: webpack will try to resolve .tsx extenstion first, and then .ts and finally .js
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    // output: tell webpack the place to bunble the code to
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name]~[contenthash].bundle.js',
      clean: true,
    },

    // mode: tell webpack in which environment it will bundle the code, development or production
    // with this example: webpack will set the process.env.NODE_ENV = development
    // mode: "development",

    // module: config all loaders that webpack needs to transpile your code
    // for example: css-loader, sass-loader to transpile css, scss file, babel loader to transpile javascript code
    module: {
      rules: [
        {
          test: /\.(ts|js)x$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|webp|avif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
          type: 'asset/inline',
        },
      ],
    },

    // plugins: an array of plugins needed by webpack
    plugins: [
      // this plugin auto generates html file from a template and auto import script tags, stylesheet tags, ....
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../public/index.html'),
        inject: true,
        hash: true,
      }),

      // this plugins support loading env variables from file
      new DotenvPlugin({}),
    ],

    // dev server, allow us to config which port dev server is running on, hot reload or not,...
    // devServer: {
    //   open: true,
    //   port,
    //   hot: true,
    // },
  };
};
