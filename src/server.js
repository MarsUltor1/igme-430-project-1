const http = require('http');
const url = require('url');
const query = require('querystring');
const jsonHandler = require('./jsonResponses.js');
const htmlHandler = require('./htmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  GET: {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/bundle.js': htmlHandler.getBundle,
    '/getUsers': jsonHandler.getUsers,
    '/notReal': jsonHandler.notReal,
    notFound: jsonHandler.notFound,
  },
  HEAD: {
    '/getUsers': jsonHandler.getUsersMeta,
    '/notReal': jsonHandler.notRealMeta,
    notFound: jsonHandler.notFound,
  },
  POST: {
    '/addUser': jsonHandler.addUser,
    notFound: jsonHandler.notFound,
  },
};

const parseBody = (request, response, handler) => {
  const body = [];

  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    const bodyParams = query.parse(bodyString);
    handler(request, response, bodyParams);
  });
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  // Check for handled request type
  if (!urlStruct[request.method]) {
    return urlStruct.HEAD.notFound(request, response); // Send 404 error code
  }

  // Check for handled response url
  if (urlStruct[request.method][parsedUrl.pathname]) {
    // Handle POST requests
    if (request.method === 'POST') {
      return parseBody(request, response, urlStruct[request.method][parsedUrl.pathname]);
    }

    // Handle GET and HEAD requests
    return urlStruct[request.method][parsedUrl.pathname](request, response);
  }

  return urlStruct[request.method].notFound(request, response); // Send 404 and maybe body
};

http.createServer(onRequest).listen(port, () => console.log(`listening on 127.0.0.1:${port}`));
