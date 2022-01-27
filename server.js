//modules required for server
const express = require('express');
const fs = require('fs');
// const { readFile } = require('fs/promises');

//server setup
const app = express();
const PORT = process.env.PORT || 3001; 
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//array to put notes in
const notesInput = [];

// //api routes
//get route to read db.json file and return saved notes as JSON
app.get("/api/notes", function(err, res) {
    fs.readFile('./db/db.json')

    res.send('Hello World');
})

// //post route should recieve new node to save on the body,
// // add to db.json, return new note to client
// //each note should have unique id (look at npm packages)
// app.post('/api/notes', function(req, res) {
//     notesInput = JSON.parse(notesInput);
//     notesInput.push(req.body);
//     notesInput = JSON.stringify(notesInput);
//     fs.writeFile('./db/db.json', notesInput, "utf8");
//     res.json(JSON.parse(notesInput));
// })

// //html routes
// //get /notes should return the notes.html
// app.get('/notes', function(req, res) {
//     res.sendFile('db.');

// });

// //GET * should return the index.html
// app.get('*', function(req, res) {

// })

app.listen (PORT, function(err) {
    if (err) console.log('server setup error')
    console.log("Server listening on port", PORT);
});