const path = require('path');
const current = process.cwd()

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {"javascripts/tests/index.js": "./front/javascripts/root/tests/index.tsx"},
  output: {
    filename: "[name]",
    path: path.resolve(current, "app/assets"),
    publicPath: "http://localhost:8090/assets"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
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
              // tslint時に自動的に修正しない
              fix: false,
              // warningをエラーにする
              emitErrors: true
            },
          },
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8090
  },
};
