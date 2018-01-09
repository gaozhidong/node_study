const axios = require('axios')
const cheerio = require('cheerio')

  (async () => {

    const res = await axios.get('http://acfun.cn/a/ac4148198')
    const html = res.data
    const $ = cheerio.load(html)

    const articleContent = $('.article-content')

    const text = articleContent.children('p').text()

    console.log(text)
  })()
  .then(r => {
    process.exit(0)
  })
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
