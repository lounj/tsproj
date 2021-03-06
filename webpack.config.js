module.exports = {
  mode: "development",
  entry: '../../src/index.tsx',
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: '/\.tsx$/',
        loader: 'awesome-typescript-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        enforce: 'pre',
        test: '/\.js$/',
        loader: 'source-map-loader'
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
