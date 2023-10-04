const fs = require('fs');

const userJson = fs.readFileSync(`${__dirname}/users.json`); // Read in "persistent" user data from file
const users = JSON.parse(userJson); // Hold created users while server is running

const respondJSON = (request, response, status, object) => {
  response.writeHead(status, 'application/json');
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  response.writeHead(status, 'application/json');
  response.end();
};

const notFound = (request, response) => {
  const resObj = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  return respondJSON(request, response, 404, resObj);
};

// Send back the users object
const getUsers = (request, response) => {
  const resObj = {
    users,
  };

  return respondJSON(request, response, 200, resObj);
};

// Send the head for getUser request
const getUsersMeta = (request, response) => respondJSONMeta(request, response, 200);

// Send back 404 error
const notReal = (request, response) => notFound(request, response);

// Send back 404 head
const notRealMeta = (request, response) => respondJSONMeta(request, response, 404);

// Add user to users object
const addUser = (request, response, body) => {
  const resObj = {
    message: 'User requires both name and age.',
  };

  // Check for required name and age
  if (!body.name || !body.age) {
    resObj.id = 'addUserMissingParams';
    return respondJSON(request, response, 400, resObj);
  }

  // set updated status code as default
  let resCode = 204;

  // Create new user
  if (!users[body.name]) {
    resCode = 201; // override status code with created
    users[body.name] = {};
  }

  // Set user fields
  users[body.name].name = body.name;
  users[body.name].age = body.age;

  // Send created response
  if (resCode === 201) {
    resObj.message = 'Created Successfully';
    return respondJSON(request, response, resCode, resObj);
  }

  // Send updated response
  return respondJSONMeta(request, response, resCode);
};

module.exports = {
  getUsers,
  getUsersMeta,
  notReal,
  notRealMeta,
  addUser,
  notFound,
};
