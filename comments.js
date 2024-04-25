// Create web server 
// Create a web server that listens for requests on port 3000. When a request is received, the server will respond with the text "Hello, World!".

// Create a new file, comments.js.
// Import the http module.
// Create an instance of the http.Server class and assign it to a constant named server.
// Call the server.listen() method and pass 3000 as an argument to make the server listen for requests on port 3000.
// Call the server.on() method and pass 'request' as the first argument and a callback function as the second argument. Inside the callback function, call the response.writeHead() method and pass 200 as the first argument and an object with a 'Content-Type' property set to 'text/plain' as the second argument. Then, call the response.end() method and pass 'Hello, World!' as an argument.
// The server should now be listening for requests on port 3000 and responding with the text "Hello, World!".

const http = require('http');

const server = http.createServer();

server.listen(3000);

server.on('request', (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello, World!');
});
