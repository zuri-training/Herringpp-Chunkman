// const express = require('express');
// const csv = require('csv-parser');
// const fs = require('fs');

// const app = express();

// app.post('/split-csv', (req, res) => {
//   // Parse the CSV file from the request body
//   const csvData = [];
//   fs.createReadStream(req.body.file)
//     .pipe(csv())
//     .on('data', (data) => {
//       csvData.push(data);
//     })
//     .on('end', () => {
//       // Split the data into chunks based on the specified size
//       const chunkSize = req.body.chunkSize || 1000;
//       const chunks = [];
//       while (csvData.length > 0) {
//         chunks.push(csvData.splice(0, chunkSize));
//       }

//       // Return the chunks to the client
//       res.json({
//         chunks: chunks,
//       });
//     });
// });