const express = require('expresss');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3001; 

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

