console.log("starting app.js")



// This is seeing if there is a file. If not, it makes it. If it does, it adds to it
const fs = require('fs');

// This is returning the information about the logged in user
const os = require('os')
// var user = os.userInfo()

// This is requiring a file we created
const notes = require('./notes.js')

// fs.appendFile('greetingsUser.txt', `Hello, ${user.username}! You are ${notes.age}`, function(err) {
//   if (err) {
//     console.log('Unable to write to file')
//   }
// })


var results = notes.addNote();
console.log(results);
