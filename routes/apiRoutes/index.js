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

//optional delete route
router.delete('/notes/:id', (req, res) => {
    //get id of note to delete
    const deleteID = req.params.id;

    //filter out other notes
    reArray = savedNotes.filter((otherNotes) => otherNotes.id !== deleteID);
    
    //write new data back to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(reArray), err => {
        if (err) {
            console.error(err);
        } else {
            console.log('Note deleted');
        }
    });  
})

module.exports = router;