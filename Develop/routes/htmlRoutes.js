const router = require('express').Router();
//html routes
//get /notes should return the notes.html
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));

});

//GET * should return the index.html
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;