var path = require('path');
var webpack = require('webpack');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: './app/app.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: PROD ? './public/bundle.min.js' : './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
      WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
      About: path.resolve(__dirname, 'app/components/About.jsx'),
      Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
      openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader?presets[]=es2016&presets[]=react&presets[]=stage-0',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
};
