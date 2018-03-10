const path = require("path");

module.exports = {
    entry: {
        app:"./src/app.js"
    },
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }, //output
    devServer:{
        contentBase: path.resolve(__dirname, "./"),
        port:8080,
        open:true
    },//devServer
    module:{
        //https://regexr.com/
        rules:[
            {
                test: /\.scss$/,
                use: [
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader",
                        options:{
                            plugins:function(){
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }

                ]
            }, //scss
            {
                test:/\.html$/, loader: "html-loader"
            },//html loader
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader:"babel-loader",
                    options: {
                        presets:["env"]
                    }
                }
            }//babel loader
        ] //rules
    }//module

}