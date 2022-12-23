const express = require('express');
const router = express.Router();
const csv = require('csvtojson');
const multer = require('multer');

router.use(express.json());
const upload = multer({ dest: 'uploads/' });

router.post('/csv', upload.single('file'), (req, res) => {
  // Read the chunk size parameter from the request body
  const chunkSize = req.body.chunkSize || 1000;

  // Read the contents of the file
  fs.readFile(req.file.path, 'utf8', (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }

    // Convert the CSV data to a JSON object
    csv().fromString(data).then(json => {
      // Break the JSON object into smaller chunks
      const chunks = [];
      for (let i = 0; i < json.length; i += chunkSize) {
        chunks.push(json.slice(i, i + chunkSize));
      }

      // Return the chunks in the right format
      res.json({
        chunks: chunks.map((chunk, index) => ({
          id: index,
          data: chunk
        }))
      });
    });
  });
});

router.post('/json', upload.single('file'), (req, res) => {
  // Read the contents of the file
  fs.readFile(req.file.path, 'utf8', (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }

    // Parse the JSON data
    const json = JSON.parse(data);

    // Break the JSON object into smaller chunks
    const chunkSize = req.body.chunkSize || 1000;
    const chunks = [];
    for (let i = 0; i < json.length; i += chunkSize) {
      chunks.push(json.slice(i, i + chunkSize));
    }

    // Return the chunks in the right format
    res.json({
      chunks: chunks.map((chunk, index) => ({
        id: index,
        data: chunk
      }))
    });
  });
});

module.exports = router;