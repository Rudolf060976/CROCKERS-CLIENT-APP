const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const TerserPlugin = require('terser-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
       template: './templates/index.html',
	   favicon: './templates/ham.svg'
     }),
		new webpack.HotModuleReplacementPlugin(),
		new BundleAnalyzerPlugin({ openAnalyzer: true }),
		new MiniCssExtractPlugin()
     ],
  output: {
    filename: '[name].bundle.js',  //'main.js',
    path: path.resolve(__dirname, './', 'dist'),
    publicPath: '/'
  },
  devServer: {
  	contentBase: path.join(__dirname,'dist'),
  	publicPath: '/',
  	port: 3000,
  	hot: true,
  	open: true,
  	historyApiFallback: true,
  	proxy: {
  		'/api': {
  		target: 'http://localhost:8000',
  		pathRewrite: { '^/api': '' }
  		} 	  
  	}
},
  module: {
	rules: [
	  {
		test: /\.(js|jsx)$/,
		resolve: {
			extensions: ['.js', '.jsx']
		},
		exclude: /(node_modules|bower_components)/,
		use: {
		  loader: 'babel-loader',
		  options: {
			presets: ['@babel/preset-env']
		  }
		}
	  },
	  {
        test: /\.css$/i,
        use: ['style-loader',MiniCssExtractPlugin.loader, 'css-loader'],
	  },
	  {
		test: /\.scss$/,
		use: [
			"style-loader", // creates style nodes from JS strings
			MiniCssExtractPlugin.loader,
			"css-loader", // translates CSS into CommonJS
			"sass-loader" // compiles Sass to CSS, using Node Sass by default
		]
	},
	{
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		       'file-loader'
		     ]		 
         },
	{
         	test: /\.(woff|woff2|eot|ttf|otf)$/,
	        use: [
	           'file-loader'
         	]
        }
	]
  },
  performance: {
	  hints: 'warning',
	  maxEntrypointSize: 250000,
	  maxAssetSize: 250000
  },
  optimization: {
	minimizer: [new TerserPlugin()],
	splitChunks: {
		chunks: 'all'
	}
  }
};
