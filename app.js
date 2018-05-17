console.log("starting app.js")

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js')











// This is seeing if there is a file. If not, it makes it. If it does, it adds to it
// const fs = require('fs');
//
// // This is returning the information about the logged in user
// const os = require('os')
// // var user = os.userInfo()
//
// // This is requiring a file we created
// const notes = require('./notes.js')

// fs.appendFile('greetingsUser.txt', `Hello, ${user.username}! You are ${notes.age}`, function(err) {
//   if (err) {
//     console.log('Unable to write to file')
//   }
// })

// Calling a function from notes.js
// var results = notes.addNote();
// console.log(results);
//
// var addResults = notes.add(2, 3);
// console.log(addResults)


// Check if string & return only unique values
// const _ = require('lodash');
// console.log(_.isString(true));
// console.log(_.isString("Drew"));
//
// console.log(_.uniq("asdfasd"));
// console.log(_.uniq([2, 4, 8, 2]));
