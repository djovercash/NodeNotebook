console.log("starting app.js")

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
var command = argv._[0]
console.log('Command: ', command)
console.log('Process: ',process.argv)
console.log('Yargs: ', argv)


if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log("Note saved")
    notes.displayNote(note)
  } else {
    console.log("Note not saved. Duplicate title")
  }
} else if (command === 'list') {
  var noteArr = notes.getAll();
  for (let note of noteArr) {
    notes.displayNote(note)
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title)
  if (note) {
    console.log("Note found")
    notes.displayNote(note)
  } else {
    console.log("Note not found")
  }
} else if (command === 'remove') {
  var result = notes.removeNote(argv.title)
  var message = result ? "Note removed" : "No note removed"
  console.log(message)
} else {
  console.log("Command not recognized")
}












































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
