const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SimpleWebpackHTMLEntrypoint = require('./build/simple-webpack-html-entrypoint')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
let root_path = path.join(__dirname, 'src', 'pages');
let ext = '.page.ts';
let output_path = path.join(__dirname, './output/dist')
const entry = require('./page-router')(root_path,output_path,ext)
entry['outer'] = path.join(__dirname, 'src','outer','index.ts')
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: output_path, // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true // only errors & warns on hot reload
    },
    entry: entry,
    output: {
        path: output_path,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif|svg|jpg)$/,
                use: [
                    {
                        loader: path.resolve(path.join(__dirname,'build','abs-url-loader', 'index.js')),
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'img/[hash:3]-[name].[ext]',
                            limit: 0,
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: path.resolve(path.join(__dirname,'build','page-loader', 'index.js')),
                        options: {
                            root:root_path,
                            expo: ['title']
                        }
                    },
                    'ts-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2 //模块被引用2次以上的才抽离
                },
                vendors: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 1,
                },

            }
        }
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@src': path.resolve(__dirname, './src'),
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: 'bundle-analyzer-report.html'
        }),
        new SimpleWebpackHTMLEntrypoint()
    ]
}
