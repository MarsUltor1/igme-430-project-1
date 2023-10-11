const fs = require('fs');

const indexBundle = fs.readFileSync(`${__dirname}/../hosted/indexbundle.js`);
const myPageBundle = fs.readFileSync(`${__dirname}/../hosted/mypagebundle.js`);

const serveFile = (response, file, contentType) => {
    response.writeHead(200, { 'Content-Type': contentType });
    response.write(file);
    response.end();
};

const getIndex = (request, response) => {
    serveFile(response, indexBundle, 'text/html');
};

const getMyPage = (request, response) => {
    serveFile(response, myPageBundle, 'text/js')
}

module.exports = {
    getIndex,
    getMyPage,
}