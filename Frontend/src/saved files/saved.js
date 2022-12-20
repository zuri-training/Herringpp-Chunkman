// First, get a reference to the saved files list container and the saved file template
const savedFilesList = document.getElementById('saved-files-list');
const savedFileTemplate = document.querySelector('.saved-file-template');

// Next, retrieve the list of saved files for the authenticated user from the server
fetch('/api/saved-files')
  .then(response => response.json())
  .then(savedFiles => {
    // For each saved file, create a new element using the saved file template
    savedFiles.forEach(savedFile => {
      const savedFileElement = savedFileTemplate.content.cloneNode(true);
      savedFileElement.querySelector('.saved-file-name').textContent = savedFile.name;
      savedFileElement.querySelector('.saved-file-date').textContent = savedFile.date;
      savedFilesList.appendChild(savedFileElement);
    });
  });
