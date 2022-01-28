const router = require('express').Router();
const path = require('path');
//html routes
//get /notes should return the notes.html
router.get('/notes', function(req, res) {
    res.sendFile(path.join('../public/notes.html'));

});

//GET * should return the index.html
router.get('*', function(req, res) {
    res.sendFile(path.join('../public/index.html'))
})

module.exports = router;