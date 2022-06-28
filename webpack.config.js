const path = require("path");
const plugins = require("./webpack.plugins");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpackConfig = require("./webpack.modules");
const os = require("os");
const {GenerateSW} = require("workbox-webpack-plugin");

module.exports = (env, argv) => {
  const modeEnv = argv.mode || "development";
  const isProd = modeEnv === "production";
  const config = webpackConfig(modeEnv);

  const optimizations = {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all"
    },
    minimizer: []
  }

  if (isProd) {
    optimizations.minimizer.push(new UglifyJsPlugin());
    plugins.push(new GenerateSW());
  }

  return {
    devServer: {
      compress: true,
      host: os.host,
      port: argv.port || 10880,
      hot: true,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "public")
      }
    },
    watch: false,
    resolve: config.resolve,
    module: {
      rules: [
        config.modules.js,
        config.modules.styles,
        config.modules.files
      ]
    },
    plugins: plugins,
    entry: {
      main: "./src/client.tsx"
    },
    output: {
      filename: "[chunkhash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/"
    },
    performance: {
      hints: false
    },
    optimization: optimizations
  }
};