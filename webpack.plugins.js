const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
  new MiniCssExtractPlugin({
    filename: "[contenthash].css",
    chunkFilename: "[contenthash].css"
  }),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/html/index.html",
    favicon: "./src/common/favicon.ico",
    minify: true
  }),
  new CopyPlugin({
    patterns: [
      "public"
    ]
  })
];