const express = require('express');
const router = express.Router();
const csv = require('csv-parser');
const fs = require('fs');

router.use(express.json());

router.get('/split/CSV', (req, res) => {
  const filename = req.params.filename;

  // Read the CSV file
  fs.createReadStream(`./${filename}.csv`)
    .pipe(csv())
    .on('data', (data) => {
      // Split the data into chunks and write each chunk to a new file
      const chunkSize = 1000; // Adjust this value to control the size of the chunks
      for (let i = 0; i < data.length; i += chunkSize) {
        fs.writeFileSync(`./chunks/${filename}-${i}.csv`, data.slice(i, i + chunkSize));
      }
    })
    .on('end', () => {
      // Send a response to the client when the CSV has been successfully split
      res.send('CSV file successfully split');
    });
});


module.exports = router;