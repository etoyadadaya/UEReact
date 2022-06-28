const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            tsconfigRaw: require("./tsconfig.json")
          }
        }
      ]
    },
    styles: {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: "css-loader",
          options: {
            modules: {
              mode: "local",
              localIdentName: "[local]-[hash:base64:6]"
            }
          }
        },
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              outputStyle: "compressed"
            }
          }
        }
      ]
    },
    files: {
      test: /\.(svg|png|webp|eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[hash].[ext]",
            esModule: false
          }
        }
      ]
    }
  };

  if (env === "production") {
    modules.styles.use.splice(2, 0, {loader: "postcss-loader"});
  }

  const resolve = {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".json"],
    alias: {
      App: path.resolve(__dirname, "src/app/"),
      Pages: path.resolve(__dirname, "src/pages/"),
      Store: path.resolve(__dirname, "src/store/"),
      UI: path.resolve(__dirname, "src/components/ui/")
    }
  };

  return {
    modules,
    resolve
  };
};