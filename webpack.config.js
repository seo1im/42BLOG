const path = require('path')  
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Mode = require('frontmatter-markdown-loader/mode')
const markdownIt = require('markdown-it')
const markdownItPrism = require('markdown-it-prism')
const hljs = require("highlight.js")


module.exports = {
    entry: './src/index.js',
    output: {                                          
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
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
                            mode : [Mode.HTML],
                            markdownIt : {
                                html : true,
                                highlight : function (str, lang) {
                                    if (lang && hljs.getLanguage(lang)) {
                                        try {
                                            return '<pre class="hljs"><code>' +
                                                 hljs.highlight(lang, str, true).value +
                                            '</code></pre>';
                                        } catch (__) {}
                                    }
                                    return '<pre class="hljs"><code>' + markdownIt().utils.escapeHtml(str) + '</code></pre>';
                                }
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
            template: './index.html'
        })
    ]
}

