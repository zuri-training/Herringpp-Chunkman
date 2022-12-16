const express = require('express');
const router = express.Router();
const fs = require('fs');

router.use(express.json());

router.get('/JSON/:filename', (req, res) => {
  const filename = req.params.filename;

  // Read the JSON file
  fs.readFile(`./${filename}.json`, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    const jsonData = JSON.parse(data);

    // Split the data into chunks and write each chunk to a new file
    const chunkSize = 100; // Adjust this value to control the size of the chunks
    for (let i = 0; i < jsonData.length; i += chunkSize) {
      fs.writeFileSync(`./chunks/${filename}-${i}.json`, JSON.stringify(jsonData.slice(i, i + chunkSize)));
    }

    // Send a response to the client when the JSON has been successfully split
    res.send('JSON file successfully split');
  });
});

module.exports = router;