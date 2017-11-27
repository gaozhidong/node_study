# express 
[Express.js](http://www.expressjs.com.cn/) 是基于 Node.js 平台，快速、开放、极简的 web 开发框架。
Express.js 框架是目前最流行的node.js后端框架之一。
## 安装

```
  npm install express --save
```

## 安装express-generator
```
  npm i -g express-generator
```

## 使用 express-generator 生成一个express项目
```
  express --view=ejs what_i_love #项目名
  cd what_i_love
  npm i
```

## 创建一个express服务

```
  const express = require('express');
  const app = express();
  app.get('/', (req, res)=>{
    res.end('You created a express app!')
  })
```