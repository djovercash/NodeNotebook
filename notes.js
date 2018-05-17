console.log("starting notes.js")

var addNote = (title, body) => {
  console.log("Adding note:", title, body)
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
