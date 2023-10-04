const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/style.css`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);

const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  serveFile(response, index, 'text/html');
};

const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};

const getBundle = (request, response) => {
  serveFile(response, bundle, 'text/html');
};

module.exports = {
  getIndex,
  getCSS,
  getBundle,
};
