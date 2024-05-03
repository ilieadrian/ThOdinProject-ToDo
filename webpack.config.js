const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: dominteraction } = require('./src/modules/dominteraction');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/modules/index.js',
        startup: './src/modules/startup.js',
        todo: './src/modules/todo.js',
        project: './src/modules/project.js',
        handletodos: './src/modules/handletodos.js',
        handleproject: './src/modules/handleproject.js',
        dominteraction: './src/modules/dominteraction.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
        title: 'ToDo List - TheOdinProject &#9745;',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};