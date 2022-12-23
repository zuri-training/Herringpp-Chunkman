const API = 'https://chunkit.onrender.com/api/auth/'

async function fetchAPI(data, endpoint, method){
    try{
        const response = await fetch(`${API}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}

