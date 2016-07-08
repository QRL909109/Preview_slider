/**
 * Created by Administrator on 2016/7/8 0008.
 */
var config={
    entry:'./main.js',
    output:{
        path:'./',
        filename:'index.js'
    },
    devServer:{
        inline:true,
        port:8080
    },
    module:{
        loaders:[{
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader:'babel',
            query:{
                presets:['es2015','react']
            }
        }]
    }
};
module.exports = config;
