/**
 * Created by Administrator on 2016/8/24 0024.
 */
var path = require('path');
var webpack = require('webpack')
var src = path.resolve(__dirname, '../src');
var commonPath = {
    dist : path.resolve(__dirname , '../dist'),
    indexHTML : path.join(src , 'index.html'),
    staticDir : path.resolve(__dirname , '../static')
}
module.exports = {
    commonPath : commonPath,
    devtool: 'cheap-module-eval-source-map',
    entry : {/*'webpack-hot-middleware/client'*/
        app : path.join(src , 'index.js')
    },
    output : {
        path : path.join(commonPath.dist , 'static'),
        filename : 'bundle.js',
        PublicPath : '/static/'
    },
    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module :{
        loaders :[
            {
                test: /\.(js|jsx)$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: src
            },{
                test:'/\.(png|jpg|woff|woff2)$/',
                loader:'url-loader?limit=8192'
            },{
                test:/\.json$/,
                loader:'json'
            }
        ]
    }
}