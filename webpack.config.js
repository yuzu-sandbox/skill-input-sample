module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/public/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}