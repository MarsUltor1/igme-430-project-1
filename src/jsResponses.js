const fs = require('fs');

const indexBundle = fs.readFileSync(`${__dirname}/../hosted/indexbundle.js`);
const myPageBundle = fs.readFileSync(`${__dirname}/../hosted/mypagebundle.js`);
const myLoginBundle = fs.readFileSync(`${__dirname}/../hosted/loginpagebundle.js`);

const serveFile = (response, file, contentType) => {
    response.writeHead(200, { 'Content-Type': contentType });
    response.write(file);
    response.end();
};

const getIndex = (request, response) => {
    serveFile(response, indexBundle, 'text/js');
};

const getMyPage = (request, response) => {
    serveFile(response, myPageBundle, 'text/js')
}

const getLoginPage = (request, response) => {
    serveFile(response, myLoginBundle, 'text/js')
}

module.exports = {
    getIndex,
    getMyPage,
    getLoginPage,
}