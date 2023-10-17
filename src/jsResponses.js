const fs = require('fs');
const { request } = require('http');

const indexBundle = fs.readFileSync(`${__dirname}/../hosted/indexbundle.js`);
const myPageBundle = fs.readFileSync(`${__dirname}/../hosted/mypagebundle.js`);
const myLoginBundle = fs.readFileSync(`${__dirname}/../hosted/loginpagebundle.js`);
const allUsersBundle = fs.readFileSync(`${__dirname}/../hosted/allusersbundle.js`);

const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  serveFile(response, indexBundle, 'text/js');
};

const getMyPage = (request, response) => {
  serveFile(response, myPageBundle, 'text/js');
};

const getLoginPage = (request, response) => {
  serveFile(response, myLoginBundle, 'text/js');
};

const getAllUsers = (request, response) => {
  serveFile(response, allUsersBundle, 'text/js');
}

module.exports = {
  getIndex,
  getMyPage,
  getLoginPage,
  getAllUsers,
};
