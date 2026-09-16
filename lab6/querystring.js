import http from 'http'
import url from 'url'
import querystring from 'querystring'
const server=http.createServer((req,res)=>{
    const parseurl=url.parse(req.url,true);
    if(req.method==='GET'&&req.url==='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form method='GET'>
                Name:<input type='text' name='name'><br>
                Age:<input type='text' name='age'><br>
                <input type='submit' value='Submit using GET'>
            </form>
            <br>
            <form method='POST'>
                Name:<input type='text' name='name'><br>
                Age:<input type='text' name='age'><br>
                <input type='submit' value='Submit using POST'>
            </form>
        `);
    }
    else if(req.method==='GET'){
        console.log("URL:",parseurl.pathname);
        console.log("Query Parameters:",parseurl.query);
        res.writeHead(200,{'content-type':'text/html'});
        res.write('URL:'+parseurl.pathname+'<br>');
        res.write('Name:'+(parseurl.query.name||"")+'<br>');
        res.write('Age:'+(parseurl.query.age||""));
        res.end();
    }
    else if(req.method==='POST'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        });
        req.on('end',()=>{
            const formData=querystring.parse(body);
            console.log('Form Parameters:',formData);
            res.writeHead(200,{'content-type':'text/html'});
            res.write("<h1>Form Data</h1>");
            res.write("Name: "+formData.name+'<br>');
            res.write("Age: "+formData.age);
            res.end();
        });
    }
});
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});