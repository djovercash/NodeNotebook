// OBJECT TO STRING
// var obj = {
//   name: "Drew",
//   age: 30
// };
//
// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// STRING TO OBJECT
// var personString = '{"name": "Drew", "age": 30}';
// var personObj = JSON.parse(personString)
// console.log(typeof personObj)
// console.log(personObj)

const fs = require('fs');

var originalNote = {
  title: "Yas Queen",
  body: "My body be full of Yas QUEENS"
}
var originalNoteStr = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteStr)

var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)
