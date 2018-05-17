console.log("Starting App")



// This is seeing if there is a file. If not, it makes it. If it does, it adds to it
const fs = require('fs');
fs.appendFile('greetings.txt', 'Hello World', function(err) {
  if (err) {
    console.log('Unable to write to file')
  }
})
