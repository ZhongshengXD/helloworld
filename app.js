const express = require('express');
const crafts = require('./record');
const path = require('path');

const app = express();

// Serve static files from the "static" directory
app.use(express.static('static'));

// Define the route for the root URL of the website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define the route for the /api/crafts URL
app.get('/api/crafts', (req, res) => {
    res.send(crafts);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});