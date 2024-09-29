const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



// import html from "./file.html";

module.exports = {
    watch: true,
    mode: 'development',
    entry: {
        index: './src/modules/index.js',
        // startup: './src/modules/startup.js',
        // todo: './src/modules/todo.js',
        // project: './src/modules/project.js',
        // handletodos: './src/modules/handletodos.js',
        // handleproject: './src/modules/handleproject.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ToDo List - TheOdinProject',
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
                use: ['style-loader', 
                    'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
            test: /\.html$/i,
            loader: "html-loader",
            },
        ],
    },
}
    
