const API = 'http://localhost:5000/chunkit/'

async function fetchAPI(data, endpoint, method){
    try{
        const response = await fetch(`${API}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        })

        const result = await response.json()
        console.log(result)
    } catch (error) {

    }
}