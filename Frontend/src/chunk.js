async function splitCSV(filename) {
    try {
      const response = await fetch(`http://localhost:3000/split/${filename}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  splitCSV('myfile');
  