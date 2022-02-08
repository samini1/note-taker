const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
let savedNotes = require('../../db/db.json');
const fs = require('fs');

//get route to read db.json file and return saved notes as JSON
router.get("/notes", (req, res) => {
    res.json(savedNotes);
});

//post route should recieve new node to save on the body,
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    //give unique id using uuid
    const id = uuidv4();
    const newNote = { title, text, id };
    console.log(newNote);   
   
    // //add new note to notes
    savedNotes.push(newNote);
    // //write notes to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
    res.json(newNote);   
});

//optional delete route
router.delete('/notes/:id', (req, res) => {
    console.log("response")
    //get id of note to delete
    const deleteID = req.params.id;

    //filter out other notes
    reArray = savedNotes.filter((otherNotes) => otherNotes.id !== deleteID);
    savedNotes = reArray;
    
    //write new data back to db.json
    fs.writeFile('./db/db.json', JSON.stringify(reArray), err => {
        if (err) {
            console.error(err);
        } else {
            console.log('Note deleted');
            res.send("Note deleted");
        }
    });
      
})

module.exports = router;