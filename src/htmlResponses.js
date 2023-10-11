const fs = require('fs'); // pull in the file system module
const { request } = require('http');

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const myPage = fs.readFileSync(`${__dirname}/../hosted/my-page.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/style.css`);


const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  serveFile(response, index, 'text/html');
};

const getMyPage = (request, response) => {
  serveFile(response, myPage, 'text/html');
}

const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};

module.exports = {
  getIndex,
  getCSS,
  getMyPage,
};
