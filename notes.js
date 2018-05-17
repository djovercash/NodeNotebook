console.log("starting notes.js")
const fs = require('fs')


var addNote = (title, body) => {
  let notes = []
  let note = {
    title,
    body
  };

  try {
    notes = JSON.parse(fs.readFileSync('notes-data.json'))
  } catch (e) {

  }

  var duplicateNotes = notes.filter((note) => note.title === title)
  if (duplicateNotes.length === 0){
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  } else {
    console.log("Duplicate Title. Please choose a new title")
  }
};

var getAll = () => {
  console.log("Getting all notes")
}

var getNote = (title) => {
  console.log("Getting note:", title)
}

var removeNote = (title) => {
  console.log("Removing note", title)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}








































// Sending a function from notes.js to app.js
// module.exports.addNote = () => {
// //   console.log("addNote")
//   return 'New Note'
// }
//
// module.exports.add = (a, b) => {
//   let result = a + b
//   return result
// }
