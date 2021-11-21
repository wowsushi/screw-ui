/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: {
    app: "./src/index.tsx",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFormat: "commonjs",
  },

  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          name: "Vendor",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  mode: "production",

  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".png",
      "svg",
      "jpg",
      "gif",
      ".less",
      ".json",
    ],
    modules: ["node_modules", "src"],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Production",
      // favicon: './src/public/favicon.svg',
    }),
    new BundleAnalyzerPlugin(),
  ],

  target: "es5",
};
