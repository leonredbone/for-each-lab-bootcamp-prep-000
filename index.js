function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var moo = ['Cow']
  moo.forEach(callback)
  return moo
}

function doToArray(array, callback) {
  array.forEach(callback)
}


