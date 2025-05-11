const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'frontend', 'frontend.html'));
})

app.post('/login', (req, res) => {
    console.log('hello')
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
