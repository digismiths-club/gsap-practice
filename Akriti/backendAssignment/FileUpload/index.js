const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;


app.use(express.raw({ type: 'text/plain', limit: '10mb' }));


app.post('/upload', (req, res) => {
  if (!req.body || req.body.length === 0) {
    return res.status(400).json({ error: 'No file content uploaded' });
  }

  const uploadDir = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }


  const fileName = `file-${Date.now()}.txt`;
  const filePath = path.join(__dirname, 'uploads', fileName);


  fs.writeFile(filePath, req.body, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save the file' });
    }


    res.status(201).json({
      message: 'File uploaded successfully!',
      fileName: fileName
    });
  });
});

app.get('/', (req, res) => {
  res.send('<h1>File Upload using Buffer</h1>');
});

app.listen(port, () => {
  console.log(`Listening to port : ${port}`);
});
