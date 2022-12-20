// Get a reference to the table
const table = document.querySelector('#download-history table');

// Create an array of objects representing the download history
const downloadHistory = [
  {
    fileName: 'File 1',
    date: 'January 1, 2020'
  },
  {
    fileName: 'File 2',
    date: 'January 2, 2020'
  }
];

// Loop through the download history and add a new row for each object
downloadHistory.forEach(download => {
  const row = document.createElement('tr');
  const fileNameCell = document.createElement('td');
  fileNameCell.textContent = download.fileName;
  const dateCell = document.createElement('td');
  dateCell.textContent = download.date;
  row.appendChild(fileNameCell);
  row.appendChild(dateCell);
  table.appendChild(row);
});
