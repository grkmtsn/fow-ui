module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
        options: {
          cache: true,
        },
      },
      {
        test: /\.css$/,
        options: {
          sourceMap: true,
          modules: {
            localIndentName: "[path][name]__[local]",
          },
        },
      },
    ],
  },
};
