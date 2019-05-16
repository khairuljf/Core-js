const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/input.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts')
    }
}