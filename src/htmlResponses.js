const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../hosted/index.html`);
const myPage = fs.readFileSync(`${__dirname}/../hosted/my-page.html`);
const loginPage = fs.readFileSync(`${__dirname}/../hosted/login.html`);
const allUsersPage = fs.readFileSync(`${__dirname}/../hosted/all-users.html`)
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
};

const getLogin = (request, response) => {
  serveFile(response, loginPage, 'text/html');
};

const getAllUsers = (request, response) => {
  serveFile(response, allUsersPage, 'text/html');
}

const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};

module.exports = {
  getIndex,
  getCSS,
  getMyPage,
  getLogin,
  getAllUsers,
};
