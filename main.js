const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const dataFilePath = path.join(__dirname, 'mydiary.json');

function readDataFromFile() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

function writeDataToFile(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

app.get('/', (req, res) => {
  const diaryData = readDataFromFile();
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/diary-data', (req, res) => {
  const diaryData = readDataFromFile();
  res.json(diaryData);
});

app.post('/diary', (req, res) => {
  const diaryEntry = req.body.entry;
  const diaryData = readDataFromFile();
  diaryData.push(diaryEntry);
  writeDataToFile(diaryData);
  console.log('Diary entry saved!');
  res.sendStatus(200);
});

app.post('/diary/:entry', (req, res) => {
  const entry = req.params.entry;
  const diaryData = readDataFromFile();
  const index = diaryData.findIndex(item => item === entry);
  if (index !== -1) {
    diaryData.splice(index, 1);
    writeDataToFile(diaryData);
    console.log('Diary entry deleted!');
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(2004, () => {
  console.log('Server is running on port 2004');
});
