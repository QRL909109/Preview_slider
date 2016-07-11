/**
 * Created by Administrator on 2016/7/8 0008.
 */
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var config={
    entry:'./main.js',
    output:{
        path:'./',
        filename:'index.js'
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ],
    module:{
        loaders:[{
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader:'babel',
            query:{
                presets:['es2015','react']
            }
        },{
            test:'/\.(png|jpg|woff|woff2)$/',
            loader:'url-loader?limit=8192'
        },{
            test:/\.json$/,
            loader:'json-loader'
        }]
    }
};
module.exports = config;
