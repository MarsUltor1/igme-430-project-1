const fs = require('fs');

const userJson = fs.readFileSync(`${__dirname}/users.json`); // Read in "persistent" user data from file
const users = JSON.parse(userJson); // Hold created users while server is running
const user = { name: "" };

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
const getUsers = (request, response, params) => {
  let resObj = {
    users,
  };

  // Return full object if no name is given
  if (!params.name) {
    return respondJSON(request, response, 200, resObj);
  }

  // Return specific persons data if name is given
  if (users[params.name]) {
    resObj = {
      [params.name]: users[params.name],
    };

    return respondJSON(request, response, 200, resObj);
  }

  // Send 400 response code if there are invalid query parameters
  resObj = {
    message: 'Invalid Query Parameter(s)',
    id: 'getUserInvalidParams',
  };

  return respondJSON(request, response, 400, resObj);
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
    // Turn section into an array
    const dislikesArray = body.dislikes.split(',');

    // Get rid of any leading or trailing spaces
    for (let i = 0; i < dislikesArray.length; i++) {
      dislikesArray[i] = dislikesArray[i].trim();
    }

    // Add/update array inside of user
    users[body.name].dislikes = dislikesArray;
  }

  if (body.mains) {
    // Turn section into an array
    const mainsArray = body.mains.split(',');

    // Get rid of any leading or trailing spaces
    for (let i = 0; i < mainsArray.length; i++) {
      mainsArray[i] = mainsArray[i].trim();
    }

    // Add/update array inside of user
    users[body.name].mains = mainsArray;
  }

  if (body.sweets) {
    // Turn section into an array
    const sweetsArray = body.sweets.split(',');

    // Get rid of any leading or trailing spaces
    for (let i = 0; i < sweetsArray.length; i++) {
      sweetsArray[i] = sweetsArray[i].trim();
    }

    // Add/update array inside of user
    users[body.name].sweets = sweetsArray;
  }

  if (body.drinks) {
    // Turn section into an array
    const drinksArray = body.drinks.split(',');

    // Get rid of any leading or trailing spaces
    for (let i = 0; i < drinksArray.length; i++) {
      drinksArray[i] = drinksArray[i].trim();
    }

    // Add/update array inside of user
    users[body.name].drinks = drinksArray;
  }

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
