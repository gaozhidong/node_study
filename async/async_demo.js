

// function foo(params, callback) {
//   setTimeout(() => {
//     callback(new Error('oops'), 'hello')
//   }, 1000);
// }

// foo({}, (err, result) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log(result)
//   }
//   bar({}, () => {
//     zoo({}, () => {

//     })
//   })
// })


//解决方案： Promise + async/await


// 同步代码
// function dealWithObj(){
//   obj.dealt = true
// }

// const obj = {}

// console.log(obj)

// dealWithObj(obj)

// console.log(obj)


(async () => {
  async function dealWithObjAsync(obj) {
    return new Promise((resolve) => {
      setTimeout(() => {
        obj.dealt = true
        resolve()
      }, 2000);
    })

  }
  const obj = {}

  console.log(obj)

  await dealWithObjAsync(obj)

  console.log(obj)

})()
  .then(r => {

  })
  .catch(e => {

  })
