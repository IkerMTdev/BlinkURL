
//-------------------------------------------
//------------Creates the server-------------
//-------------------------------------------

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from the Node.js server!');
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
