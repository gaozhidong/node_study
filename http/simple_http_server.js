//Uniform Resource Locator
// Schema://host:port/path?query#hash  //Schema 协议名    host：主机名  port：端口号  

// port: 22 ssh, 80:http  443:https  27017:mongodb


// const http = require('http');
// const server = http.createServer();
// server.listen(8808)

// server.on('request',(request,response) =>{
//   response.statusCode = 200;
//   response.end('welcome to my first http server');
// });

// const http = require('http');
// const server = http.createServer();
// server.listen(8808)

// server.on('request',(request,response) =>{

//   const url = request.url;

//   console.log(url);

//   let responseStr;

//   if(url === '/hello'){
//     responseStr = 'hi there';
//   }else if(url === '/bye'){
//     responseStr = 'see ya next time';
//   }else{
//     responseStr = 'i cant understand what you are saying'
//   }

//   response.statusCode = 200;
//   response.end(responseStr);
// });






//  localhost:8808/hello?i_need_money=true&how_much=1000
// const http = require('http');
// const server = http.createServer();
// server.listen(8808)
// const qs = require('querystring');

// server.on('request',(request,response) =>{

//   const url = request.url;

//   const queryString = url.substr(url.indexOf('?')+1,url.length);

//   const query = qs.parse(queryString);

//   console.log(query);

//   let responseStr;

//   if(url.indexOf('/hello') > -1){
//     responseStr = 'hi there';
//     console.log(query.i_need_money)
//     console.log(query.how_much)
    
//     if(query.i_need_money === 'true' && Number(query.how_much) > 500){
//       responseStr = 'go away';
//     }else{
//       responseStr = 'ok, here you ary';
//     }
//   }else if(url.indexOf('/bye') > -1){
//     responseStr = 'see ya next time';
//   }else{
//     responseStr = 'i cant understand what you are saying'
//   }

//   response.statusCode = 200;
//   response.end(responseStr);
// });


//HTTP 请求第一部分(第一行)  GET/ index / HTTP/1.1

//HTTP 方法 GET POST PATCH PUT DELETE OPTIONS HEAD

//path: /user get:获取所有用户 post:创建用户  patch:修改用户信息 put:创建 delete:删除 
//            options:列举可进行的操作  head:返回head信息


const http = require('http');
const server = http.createServer();
server.listen(8808)
const qs = require('querystring');
const users = [];
server.on('request',(request,response) =>{

  const url = request.url;

  const path = url.substr(0,url.indexOf('?'));

  const queryString = url.substr(url.indexOf('?')+1,url.length);

  const query = qs.parse(queryString);

  let responseStr;

  switch (path) {
    case '/user':
      switch(request.method){
        case 'GET':
          response.statusCode = 200;
          response.end(JSON.stringify(users));
          break;
        case 'POST':
          const user = {name:Math.floor(Math.random() * 100)};
          users.push(user);
          response.statusCode = 200;
          response.end(JSON.stringify(user));
          break;
      }
      break;
    default:
      response.statusCode = 404;
      response.end('NOT_FOUND');
      break;
  }
});







