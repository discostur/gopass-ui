const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const spawn = require('child_process').spawn

const baseConfig = require('./webpack.renderer.search.config')

module.exports = merge(baseConfig, {
    entry: {
        app: './src/renderer/search-app.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [ path.resolve(__dirname, 'src', 'renderer') ],
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 2004,
        compress: true,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        historyApiFallback: {
            verbose: true,
            disableDotRule: false
        }
    }
})
