const router = require('express').Router();
const uniqid = require('uniqid');
const savedNotes = require('../db/db.json');
const fs = require('fs');

//get route to read db.json file and return saved notes as JSON
router.get("/notes", (req, res) => {
    res.json(savedNotes);
});

//post route should recieve new node to save on the body,
// add to db.json, return new note to client
//each note should have unique id (look at npm packages)
router.post('/notes', function(req, res) {
    //give unique id using uniqid
    req.body.id = uniqid();
    //recieve new note
    const newNote = req.body;
    //add new note to notes
    savedNotes.push(newNote);
    //write notes to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
    res.json(newNote);
});

module.exports = router;