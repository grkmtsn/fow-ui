const commonPaths = require('./paths');

module.exports = {
  entry: {
    main: commonPaths.entryPath,
    components: commonPaths.componentsFolder,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less'],
  },
  externals: [
    {
      react: 'react',
      'react-dom': 'react-dom',
      'prop-types': 'prop-types',
    },
    /^antd[.]*/,
  ],
};
