

function foo(params, callback) {
  setTimeout(() => {
    callback(new Error('oops'), 'hello')
  }, 1000);
}

foo({}, (err, result) => {
  if(err){
    console.log(err.stack)
  }else{
    console.log(result)
  }
})
