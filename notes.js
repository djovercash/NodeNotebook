console.log("starting notes.js")


// Sending a function from notes.js to app.js
module.exports.addNote = () => {
  console.log("addNote")
  return 'New Note'
}