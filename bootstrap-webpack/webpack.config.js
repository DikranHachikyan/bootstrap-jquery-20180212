const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

const htmlPluginOptions = {
    template: "./index.html",
    filename: "index.html",
    inject: "body"
};

const providePluginOptions = {
    $:'jquery',
    jQuery:'jquery',
    'window.jQuery':'jquery'
};

const copyImagesOptions = {
    from: "./assets/images/**/*",
    to: './'
};

module.exports = {
    entry: {
        app:"./src/app.js",
        vendor:['bootstrap','jquery','popper.js']
    },
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }, //output
    devServer:{
        contentBase: path.resolve(__dirname, "dist"),
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
            },//babel loader
            // {
            //     test:/\.(jpg|jpeg|png)$/,
            //     use:{
            //         loader:"url-loader",
            //         options:{
            //             limit: 100000
            //         }
            //     }
            // },
            {
                test:/\.(jpg|jpeg|png)$/,
                use:[{
                    loader:"file-loader",
                    options:{
                        name: "images/[name]-[hash].[ext]"
                    }
                    
                }]
            }

        ] //rules
    },//module
    optimization:{
        splitChunks:{
            name: "vendor"
        }
    }, //optimization
    plugins: [
        new HtmlWebpackPlugin(htmlPluginOptions),
        new webpack.ProvidePlugin(providePluginOptions),
        new CopyWebpackPlugin([ copyImagesOptions])
    ]//Plugins
}