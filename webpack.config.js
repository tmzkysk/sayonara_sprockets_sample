const path = require('path')
const current = process.cwd()
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const commonSetting = {
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss", ".sass"]
  },
  devServer: {
    port: 8090
  }
}

let jsSetting = {
  entry: {"javascripts/tests/index": "./front/javascripts/root/tests/index.tsx"},
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(current, "public/assets"),
    publicPath: "assets/"
  },
  plugins: [ new ManifestPlugin({fileName: 'javascripts/webpack-manifest.json'}), new ExtractTextPlugin("[name]-[hash].css") ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" },
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              fix: false,
              emitErrors: true
            },
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        use: [
          { loader: "babel-loader" },
        ],
        exclude: /node_modules/
      }
    ]
  }
}

let cssSetting = {
  entry: {
    "stylesheets/tests/index": "./front/stylesheets/root/tests/index.scss"
  },
  output: {
    filename: "[name]-[hash].css",
    path: path.resolve(current, "public/assets"),
    publicPath: "assets/"
  },
  plugins: [ new ManifestPlugin({fileName: 'stylesheets/webpack-manifest.json'}), new ExtractTextPlugin("[name]-[hash].css") ],
  module: {
    rules: [
      {
        test: /\.png?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: "images",
              context: path.resolve(__dirname, 'public/assets'),
              publicPath: "assets/images"
            }
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({ use: 'css-loader?&minimize&sourceMap!sass-loader' }),
        exclude: /node_modules/
      }
    ]
  },
}

module.exports = [
  Object.assign({}, commonSetting, jsSetting),
  Object.assign({}, commonSetting, cssSetting)
];
