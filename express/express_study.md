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
  express --view=ejs express_demo #项目名
  cd express_demo
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

## 中间件

中间件: 可以理解为处理请求时，对一系列复杂逻辑和操作进行封装和抽象，借助该系统，使用三方中间件处理网络请求流程中的逻辑会异常简单

使用**app.use()**来引入中间件

```
const bodyParser = require('body-parser') // 使用body-parser处理请求体，不用担心是urlencoded还是json
app.use(bodyParser)
app.get('/',(req,res)=>{
  console.log(req.body)  //获取请求体
})
```
#### 错误中间件

```
function(err,req,res,next){} //必须指定四个参数，不可省略next
```

#### 常用的中间件
- 请求体解析 body-parser
- 文件上传 multer
- cookie\session相关 cookie-parser cookie-session
- http传输压缩 compression
- 安全相关 helmet

