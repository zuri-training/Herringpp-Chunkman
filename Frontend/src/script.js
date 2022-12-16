const API = 'http://localhost:4000/api/auth'
const splitCSV = 'http://localhost:4000/api/'

async function fetchAPI(data, endpoint, method){
    try{
        const response = await fetch(`${API}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
        });

        const result = await response.json()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}