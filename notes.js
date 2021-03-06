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
  return fetchNotes()
}

var getNote = (title) => {
  let notes = fetchNotes()
  let note = notes.find((note) => note.title === title)
  return note
}

var removeNote = (title) => {
  let notes = fetchNotes()
  let nonRemovedNotes = notes.filter((note) => note.title !== title)
  saveNotes(nonRemovedNotes)
  if (notes.length !== nonRemovedNotes.length) {
    return true
  } else {
    return false
  }
}

var displayNote = (note) => {
  console.log("~~~~")
  console.log(`Title: ${note.title}`)
  console.log(`Body: ${note.body}`)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  displayNote
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
