const http=require('http');
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/index.html',
  method: 'GET'
};

function handleResponse(response) {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    console.log(data);
  });
}

const request = http.request(options, handleResponse);

request.on('error', (error) => {
  console.error(error);
});
request.end();