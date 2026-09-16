const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
    const filePath=path.join(__dirname,'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page not found');
  }
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});