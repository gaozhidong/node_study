const axios = require('axios')
const cheerio = require('cheerio')




  (async () => {

    const res = await axios.get('http://acfun.cn/a/ac4148198')
    const html = res.data
    const $ = cheerio.load(html)

    const articleContent = $('.article-content')

    const dom = $(articleContent)
    const content = getTextOrImg(dom, [])

    function getTextOrImg(dom, arr) {
      const d = $(dom)
      const children = d.children()
      if (d.html()) {
        console.log(d)
        arr.push(d.html())

      }
      if (children.length === 0) {
        if (d['0'].name === 'img') {
          arr.push(d.html())
        }
      } else {
        for (let i = 0; i < children.length; i++) {
          const child = children[i]
          getTextOrImg(child, arr)
        }
      }
      return arr
    }

    console.log(text)
  })()
  .then(r => {
    process.exit(0)
  })
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
