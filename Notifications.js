// app.js

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ensure the "data.csv" file exists
const csvFilePath = 'data.csv';
if (!fs.existsSync(csvFilePath)) {
  fs.writeFileSync(csvFilePath, 'Name,Email\n', 'utf-8');
}

app.post('/saveData', (req, res) => {
  const data = req.body;
  const csvData = `${data.name},${data.email}\n`;

  fs.appendFile('data.csv', csvData, (err) => {
    if (err) {
      res.status(500).send('Error saving data to the server');
    } else {
      res.status(200).send('Data saved on the server');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
