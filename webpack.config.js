const path = require('path');
module.exports = {
    mode: 'development', //设置环境，有development和production两个值，production是生产环境，代码会被压缩
    entry: {
        'main1': './src/index.js'
    },
    module: {
        rules: [{
            test: /\.jpg$/,
            use: {
                loader: 'url-loader',
                // 若我们用原来的名称则用这种方式，【ext]就是文件的后缀
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: '/images/', //把图片打包的指定的目录下
                    limit: 1024
                }
            }
        }]
    }, 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}