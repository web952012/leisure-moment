const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production'
    return {
        entry: [
            "babel-polyfill",
            path.join(__dirname, './src/main.js')
        ],
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {}
                        // other vue-loader options go here
                    }
                },
                {
                    test: /\.(vue|js)$/,
                    exclude: /node_modules/,
                    use: [
                        "babel-loader",
                        "eslint-loader"
                    ]
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }]
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('src')
            }
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                filename: "./index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new VueLoaderPlugin()
        ]
    }
};
