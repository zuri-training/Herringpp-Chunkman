// Fetch the list of documents from the server
fetch('/api/documents')
  .then(response => response.json())
  .then(documents => {
    // Add a div for each document to the container element
    const documentsContainer = document.getElementById('documents-container');
    documents.forEach(document => {
      const documentDiv = document.createElement('div');
      documentDiv.classList.add('document');
      documentDiv.innerHTML = `
        <div class="document-title">${document.title}</div>
        <a href="/view/${document.id}">View</a>
      `;
      documentsContainer.appendChild(documentDiv);
    });
  });
