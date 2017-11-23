//Uniform Resource Locator
// Schema://host:port/path?query#hash  //Schema 协议名    host：主机名  prot：端口号  

// port: 22 ssh, 80:http  443:https  27017:mongodb


// const http = require('http');
// const server = http.createServer();
// server.listen(8808)

// server.on('request',(reqeust,response) =>{
//   response.statusCode = 200;
//   response.end('welcome to my first http server');
// });

const http = require('http');
const server = http.createServer();
server.listen(8808)

server.on('request',(request,response) =>{

  const url = request.url;

  console.log(url);

  let responseStr;

  if(url === '/hello'){
    responseStr = 'hi there';
  }else if(url === '/bye'){
    responseStr = 'see ya next time';
  }else{
    responseStr = 'i cant understand what you are saying'
  }

  response.statusCode = 200;
  response.end(responseStr);
});
