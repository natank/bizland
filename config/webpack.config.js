const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './app/assets/scripts/main.js',
    posts: './app/assets/scripts/posts.js',
    categories: './app/assets/scripts/categories.js',
    comments: './app/assets/scripts/categories.js',
    login: './app/assets/scripts/login.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: true,
    port: 3100
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './app/index.pug',
      templateParameters: {
        page: 'Home'
      },
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './app/posts.pug',
      filename: 'posts.html',
      templateParameters: {
        page: 'Posts'
      },
      chunks: ['posts']
    }),
    new HtmlWebpackPlugin({
      template: './app/users.pug',
      filename: 'users.html',
      templateParameters: {
        page: 'Users'
      },
      chunks: ['categories']
    }),
    new HtmlWebpackPlugin({
      template: './app/comments.pug',
      filename: 'comments.html',
      templateParameters: {
        page: 'Comments'
      },
      chunks: ['comments']
    }),
    new HtmlWebpackPlugin({
      template: './app/login.pug',
      filename: 'login.html',
      templateParameters: {
        page: 'Login'
      },
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      template: './app/categories.pug',
      filename: 'categories.html',
      templateParameters: {
        page: 'Categories'
      },
      chunks: ['categories']
    }),
    new HtmlWebpackPlugin({
      template: './app/details.pug',
      filename: 'details.html',
      templateParameters: {
        page: 'Details'
      },
      chunks: ['posts']
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:3100/',
      injectCss: true,
      reload: true
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist')
  }
};
