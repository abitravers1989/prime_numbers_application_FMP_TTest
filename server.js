var http = require ('http');

function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World');
  response.end();
}

http.createServer(onRequest).listen(8000);


https://www.youtube.com/watch?v=p5eCYKiZN-4
