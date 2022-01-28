//modules required for server
const express = require('express');
const fs = require('fs');

//route modules
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//server setup
const app = express();
const PORT = process.env.PORT || 3001; 
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//use api router
app.use('/api', apiRoutes);

//use html router
app.use('/', htmlRoutes);

app.listen (PORT, function(err) {
    if (err) console.log('server setup error')
    console.log("Server listening on port", PORT);
});