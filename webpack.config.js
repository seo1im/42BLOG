const path = require('path')  
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
                loader : [
                    "babel-loader",
                    "@hugmanrique/react-markdown-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

