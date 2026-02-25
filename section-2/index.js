const http = require('http');
const os = require('os');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

  // Return some basic info to show the app is working
    const responseData = {
    message: "Hello from the Dockerized Node app!",
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
    };

    res.end(JSON.stringify(responseData));
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}/`);
});
