const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    // entry: {
    //     'main1': './src/index.js'
    // },
    // entry: './src/index.js',//打包默认生成的名字为main.js
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [{
            test: /\.jpg$/,
            use: {
                loader: 'url-loader',
                // 若我们用原来的名称则用这种方式，【ext]就是文件的后缀
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/', //把图片打包的指定的目录下
                    limit: 1024
                }
            }
        },
        {
            test: /\.(eot|ttf|svg|woff|woff2)$/,
            use: {
                loader: 'file-loader'
            }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        // modules: true //启用CSS模块功能
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }]
    }, 
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        // htmlWebpackPlugin会在打包结束后，自动生成一个HTML文件，并把打包生成的js自动引入到这个HTML文件中
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            reject: 'body',
            // chunks: ['main1']
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
    ]
}