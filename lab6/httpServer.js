import http from 'http'
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Hello from Node.js HTTP server</h1>');
    res.end();
});
server.listen(3000,()=>{
    console.log("server running at http://localhost:3000");
});