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

// Add user to users object
const addUser = (request, response, body) => {
  const resObj = {
    message: 'User requires name.',
  };

  // Check for required name and age
  if (!body.name) {
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

  // Check for each food field
  if (body.dislikes) {
    const dislikesArray = body.dislikes.split(',');
    users[body.name].dislikes = dislikesArray;
  }

  if (body.mains) { users[body.name].mains = body.mains; }
  if (body.sweets) { users[body.name].sweets = body.sweets; }
  if (body.drinks) { users[body.name].sweets = body.drinks; }

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
  addUser,
  notFound,
};
