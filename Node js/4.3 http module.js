/**
 * 
 * 🌐 HTTP Module — Node.js
📌 What is http module?
The http module is used to create web servers in Node.js.
It allows Node.js to handle HTTP requests and send responses.

👉 It is a core module (no installation required)

const http = require('http');
⚡ Create a Basic Server
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

📌 Now open: http://localhost:3000

🔁 Request & Response Objects
📨 req (Request)

Contains data from client:

req.url → requested route
req.method → HTTP method (GET, POST, etc.)
req.headers → request headers
📤 res (Response)

Used to send response:

res.write() → send data
res.end() → end response
res.setHeader() → set headers
res.statusCode → set status
🎯 Routing Example
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
📦 Handling JSON Response
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify({ message: 'Hello' }));
📥 Handling POST Data (Important)
let body = '';

req.on('data', (chunk) => {
  body += chunk.toString();
});

req.on('end', () => {
  console.log(body);
  res.end('Data received');
});

📌 Data comes in chunks (streams)

⚠️ Important Concepts
🔹 Server is Event-driven
http server works on event loop
Handles multiple requests asynchronously
🔹 Streams (VERY IMPORTANT)
Request & response are streams
Data comes in chunks (not all at once)
🔹 Headers
res.setHeader('Content-Type', 'text/plain');

Common types:

text/plain
text/html
application/json
🔹 Status Codes
res.statusCode = 200; // OK
res.statusCode = 404; // Not Found
res.statusCode = 500; // Server Error
🔥 Interview Points
http is a core module
Used to create raw Node.js servers
Request & response are streams
Handles routing manually (no Express)
Non-blocking and event-driven
🚀 Real-world Note

👉 In production, we usually use frameworks like:

Express.js
Fastify

Because:

Routing is easier
Middleware support
Cleaner code
🧠 Quick Summary
Concept	Description
Module Type	Core module
Purpose	Create web server
createServer()	Creates server
req	Incoming request
res	Outgoing response
Streams	Data in chunks
💥 Mini Interview Trick

👉 Why Express over http?

http → low-level (manual work)
Express → abstraction + faster development
 * 
 * 
 */