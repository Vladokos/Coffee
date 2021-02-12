const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');


module.exports = {
    entry: ['./src/main.ts'],
    devtool: 'inline-source-map',
    module: {
        rules: [

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.html$/,
                use: ['html-loader']
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                     
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/',
                            useRelativePaths: true
                        }
                    },
                    {
                        loader: ImageminPlugin.loader,
                        options: {
                            bail: false,
                            cache: false,
                            imageminOptions: {
                                plugins: [
                                    ['pngquant', { quality: [0.9, 1] }],
                                    ['mozjpeg', { quality: 100, progressive: true }],
                                    ['gifsicle', { interlaced: true, optimizationLevel: 3 }],
                                    ['svgo', {
                                        plugins: [
                                            { removeViewBox: false }
                                        ]
                                    }]
                                ]
                            }
                        }
                    }
                ]
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/teplate.html'
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};