const path = require('path');

module.exports = {
    entry: {
        index: './client/index.js',
        mypage: './client/myPage.js',
        loginpage: './client/loginPage.js',
        allusers: './client/allUsers.js'
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