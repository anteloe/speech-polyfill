const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'dist/speech-polyfill.min.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'js'), 'node_modules']
    },
    plugins: [
        new UglifyJsPlugin()
    ]
}