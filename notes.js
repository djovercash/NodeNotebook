console.log("starting notes.js")

var addNote = (title, body) => {
  console.log("Adding Title:", title)
  console.log("Adding Body:", body)
};

var getAll = () => {
  console.log("Getting all Notes")
}

var getNote = (title) => {
  console.log("Reading Title:", title)
}

var removeNote = (title) => {
  console.log("Removing Title", title)
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
