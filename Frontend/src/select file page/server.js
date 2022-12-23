const API = 'https://chunkit.onrender.com/split'

const formData = new FormData();
formData.append('file', file); // file is the JSON file to be uploaded


async function fetchAPI(data, endpoint, method){
    try {
        const response = await fetch(`${API}/${endpoint}`, {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const result = await response.json();
        return result; // The chunks are returned in the response data
      } catch (error) {
        console.error(error);
      }
      
}
