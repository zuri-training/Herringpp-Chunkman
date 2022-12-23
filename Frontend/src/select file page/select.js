
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!fileInput.isDefaultNamespace.length) {
            alert('Please select a  file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
    });
});

const formData = new FormData($('#upload-form')[0]);
formData.append('chunkSize', $('#chunk-size').val()); // Read the chunk size value from the input field

$.ajax({
  url: '/CSV',
  type: 'POST',
  data: formData,
  contentType: false,
  processData: false,
  dataType: 'json',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.error(error);
  }
});

