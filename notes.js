console.log("starting notes.js")
const fs = require('fs')

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'))
  } catch (e) {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  let notes = fetchNotes()
  let note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0){
    notes.push(note)
    saveNotes(notes)
    return note
  }
};

var getAll = () => {
  console.log("Getting all notes")
}

var getNote = (title) => {
  console.log("Getting note:", title)
}

var removeNote = (title) => {
  let notes = fetchNotes()
  let nonRemovedNotes = notes.filter((note) => note.title !== title)
  saveNotes(nonRemovedNotes)
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
