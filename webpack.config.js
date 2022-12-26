const path = require('path');
const HTMLWebpack = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


const devServer = isDev => !isDev ? {} : {
  devServer: {
    open: true,
    hot: false,
    port: 4200,
    static: {
      directory: path.join(__dirname, 'assets/contentImg'),
      serveIndex: true,
    },
  },
}

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,
  target: develop ? 'web' : 'browserslist',
  context: path.resolve(__dirname, 'src'),
  entry: './script.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name]_[hash][ext]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpack({
      template: './index.html',
      filename: './index.html'
    }),
    new HTMLWebpack({
      template: './cart.html',
      filename: './cart.html'
    }),
    new HTMLWebpack({
      template: './notfound.html',
      filename: './notfound.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${path.resolve(__dirname, 'src/assets/html_img')}`,
          to: `${path.resolve(__dirname, 'dist/assets/html_img')}`
        }
      ]
    }),
    new MiniCssPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.[tj]s$/i,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(s*)css$/i,
        use: [
          MiniCssPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]]
              },
            },
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(mp3|wav)$/i,
        type: 'asset',
        generator: {
          filename: 'audio/[name]_[hash][ext]'
        }
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  ...devServer(develop)
})  