const path = require('path')  
const HtmlWebpackPlugin = require('html-webpack-plugin')
const marked = require("marked")
const renderer = new marked.Renderer()

module.exports = {
    entry: './src/index.js',
    output: {                                          
        path: path.join(__dirname, '/build'),
        filename: 'index_bundle.js'
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    },
    module: {            
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.md$/,
                exclude: /node_modules/,
                use : [
                    {
                        loader : "frontmatter-markdown-loader",
                        options : {
                            mode : ['react-component'],
                            react : {
                                root : "markdown"
                            }
                        }
                    }
                ]   
            },
            {
                test: /\.css$/,
                use : [
                    {
                        loader : "style-loader"
                    },
                    {
                        loader : "css-loader",
                        options : {
                            modules : true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

