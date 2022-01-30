const router = require('express').Router();
const uniqid = require('uniqid');
const savedNotes = require('../../db/db.json');
const fs = require('fs');

//get route to read db.json file and return saved notes as JSON
router.get("/notes", (req, res) => {
    res.json(savedNotes);
});

//post route should recieve new node to save on the body,
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = { title, text };
    console.log(newNote);   
    
    //give unique id using uniqid
    req.body.id = uniqid();
   
    // //add new note to notes
    savedNotes.push(newNote);
    // //write notes to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
    res.json(newNote);
    
    return;
});

module.exports = router;