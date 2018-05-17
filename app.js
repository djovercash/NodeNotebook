console.log("starting app.js")



// This is seeing if there is a file. If not, it makes it. If it does, it adds to it
const fs = require('fs');
// fs.appendFile('greetings.txt', 'Hello World', function(err) {
//   if (err) {
//     console.log('Unable to write to file')
//   }
// })

// This is returning the information about the logged in user
const os = require('os')
var user = os.userInfo()


fs.appendFile('greetingsUser.txt', `Hello, ${user.username}`, function(err) {
  if (err) {
    console.log('Unable to write to file')
  }
})

const notes = require('./notes.js')
