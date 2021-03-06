### 概述
搭建的系统有一下几部分构成，服务之间相互独立，通过共享数据库和服务进行调用
1. 内容爬取:根据设定的任务爬取各个网站的内容
2. 订阅分发:根据用户兴趣，从爬取内容中订阅，进行推送
3. Web服务 :提供一系列的网页和API，供客户端显示

### 内容爬取
1. 网页、api爬取：视爬取难易程度和api友好程度，可以分为以下几种
* superagent/axios等http client
* phantomjs等无头浏览器
* 使用puppeteer控制的chromium
2. 网页分析处理：视复杂程度可以使用以下几种
* cheerio,使用类似js的api分析处理dom
* chomium或者phantomjs等直接使用浏览器中的jsapi处理分析
* 简单的json\xml和文本处理工具

3. 持久化
* 爬取规则和策略：使用mongodb存储针对各个页面的爬取策略，如，爬取文件位置、运行时间和间隔
* 源数据归档：持久化爬取到的元数据
* 格式化的数据：以资源的形式存储到数据库中

### 订阅分发

1. 推送
* 使用nodemailer进行邮件推送
* 使用三方推送进行客户端推送
* 使用socket.io或者http service进行网页推送

2. 订阅：订阅数据库中的某资源

### Web服务

1. 用户端：用户注册、登录、订阅管理和查阅等功能
2. 后台端：策略管理、异常管理、资源管理