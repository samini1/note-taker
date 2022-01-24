//modules required for server
const express = require('expresss');
const fs = require('fs');
//server setup
const app = express();
const PORT = process.env.PORT || 3001; 
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//array to put notes in
const notesArr = [];

//api routes
//get route to read db.json file and return saved notes as JSON
app.get("/api/notes", function(req, res) {

})

//post route should recieve new node to save on the body,
// add to db.json, return new note to client
//each note should have unique id (look at npm packages)
app.post('/api/notes', function(req, res) {

})

//html routes
//get /notes should return the notes.html
app.get('/notes', function(req, res) {
    res.sendFile()

})

//GET * should return the index.html
app.get('*', function(req, res) {

})

app.listen ()