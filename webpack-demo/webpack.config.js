const path = require("path");
module.exports = {

    mode:"development",
    entry:"./src/index.js",
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:"index.js"
    },
    module: {
        rules:[
            {
                test:/\.txt$/,
                use:"raw-loader",
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        outputPath:"./images",//在出口的文件夹下
                        publicPath:'../dist/images',
                        limit:100
                    }
                }

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                           
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // 启用/禁用 url() 处理
                            url: true,
                            // 启用/禁用 @import 处理,css中的@import语法
                            import: true,
                            // 启用/禁用 Sourcemap
                            sourceMap: false
                        }
                    }
                ]
            }

    
        ]
    }
}