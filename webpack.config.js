const path = require('path');

module.exports = {
    entry: {
        index: './client/client.js',
        mypage: './client/myPage.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: '[name]bundle.js',
    },
    watchOptions: {
        aggregateTimeout: 200,
    },
}