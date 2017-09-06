const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'dist/polyfill.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'js'), 'node_modules']
    }
}