const API = 'https://chunkit.onrender.com/split'

const formData = new FormData();
formData.append('file', file); // file is the JSON file to be uploaded


async function fetchAPI(endpoint, method){
    try{
        const response = await fetch(`${API}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then(response => {
            return response.json();
          }).then(data => {
            console.log(data);
        })
    } catch (error) {
        console.log(error);
    }
}
