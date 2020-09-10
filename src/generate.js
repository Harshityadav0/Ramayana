var fs = require('fs')
const dataBuffer = fs.readFileSync('./assets/quotes.json')
const datastr = dataBuffer.toString()
const data = JSON.parse(datastr)

// var newdata = data.reduce(function(a,b)   {
//     return {quote : a.quote + b.quote}
// })
// console.log(newdata)

// var olddata = data.reduce(function(a,b) {
//     return a + b.quote
// },0)
// // console.log(olddata)


module.exports = data