var webpack =require('webpack');
var path =require('path');
var HtmlwebpackPlugin =require('html-webpack-plugin');
 

module.exports={
    context: __dirname + '/public',
    entry:'./main.js',
    module:{
        rules:[                        // rules为数组，保存每个加载器的配置
            {
                test:/\.js$/,           // test属性必须配置，值为正则表达式，用于匹配文件        
                loader:'babel-loader',   // loader属性必须配置，值为字符串，对于匹配的文件使用babel-loader和eslint-loader处理，处理顺序从右向左，先eslint-loader，后babel-loader，loader之间用！隔开，loader与options用？隔开
                exclude:/node_module/, //对于匹配的文件进行过滤，排除node_module目录下的文件
                // include:'./src/', // 指定匹配文件的范围
                // option:{  //loader的options也可以单独使用options属性来配置
                //     fakeoption:true
                // }
            }, {test:/\.css$/,
                loader:'style-loader!css-loader'
                },
                
            
            
        ]

    },
    
    output:{
        path:__dirname+"/dist",
        filename:'[name].[chunkhash].js'  // 输出到dist/目录下，以name+chunk内容的md5值作为输出的文件名
    },

    plugins:[
        new HtmlwebpackPlugin({
        filename:'index.html',
        template:'./src/index.html',
       
        })
    ]
}