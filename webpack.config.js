const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/index.tsx',
   
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'public/build'),
      publicPath: '/dev-build',
   },

   resolve: {
      extensions: [".js", ".json", ".ts", ".tsx"],
   },

   module: {
      rules: [
         { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
         { test: /\.(tsx|ts)$/, use: 'ts-loader' }
      ]
   },

   devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 3000,
   }
}