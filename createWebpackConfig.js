const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var SpritesmithPlugin = require('webpack-spritesmith');


module.exports = (name, __localDir) => {

    return {
        name: name,
        entry: {
            app: path.resolve(__localDir, "index.js")
        },
        output: {
            path: path.resolve(__dirname, "dist", name),
            filename: "[name].bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader?cacheDirectory",
                    exclude: /(node_modules)/
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(png|jpg|gif|webp|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[hash].[ext]',
                                outputPath: '/images',
                                publicPath: './images'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new SpritesmithPlugin({
                src: {
                    cwd: path.resolve(__localDir, 'images', 'sprite'),
                    glob: '*.png'
                },
                target: {
                    image: path.resolve(__localDir, 'spritesmith-generated/sprite.png'),
                    css: path.resolve(__localDir, 'spritesmith-generated/sprite.scss')
                },
                apiOptions: {
                    cssImageRef: "~sprite.png",
                },
                // retina: '@2x'
            })
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true
                })
            ],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        resolve: {
            modules: ["node_modules", "spritesmith-generated"]
        }
    };

};