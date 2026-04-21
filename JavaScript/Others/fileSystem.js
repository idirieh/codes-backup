// Import the 'fs' module (built-in module for file system operations)
const fs = require('fs');

// Use the module's functionality
fs.readFile('./Others/example.txt', 'utf8', (err, data) => {
    if (err) {console.log(err)};
    console.log(data);
});