const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicUrl = process.env.PUBLIC_URL;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,
        exclude: /(node_modules|bower_components)/,
        // include: __dirname,
        // loader: 'babel-loader',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
