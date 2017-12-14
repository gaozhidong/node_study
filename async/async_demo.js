

function foo(params, callback) {
  setTimeout(() => {
    callback(null, 'hello')
  }, 1000);
}

foo({}, (err, result) => {
  console.log(result)
})
