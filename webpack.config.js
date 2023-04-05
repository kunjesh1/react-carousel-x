const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  postcssCustomMedia({
                    importFrom: "./node_modules/open-props/media.min.css",
                  }),
                  postcssPresetEnv({
                    stage: 0,
                    enableClientSidePolyfills: false,
                    features: {
                      "cascade-layers": false,
                      clamp: false,
                      "logical-properties-and-values": false,
                      "prefers-color-scheme-query": false,
                      "gap-properties": false,
                      "custom-properties": false,
                      "place-properties": false,
                      "dir-pseudo-class": false,
                      "is-pseudo-class": false,
                      "focus-within-pseudo-class": false,
                      "focus-visible-pseudo-class": false,
                      "color-functional-notation": false,
                    },
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom",
  },
};
