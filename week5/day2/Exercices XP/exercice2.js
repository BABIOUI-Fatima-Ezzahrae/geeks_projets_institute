const ApiUrl = fetch('https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=sun&limit=10&offset=2&rating=g')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
   .then(data => {
    console.log(data)
   })
   .catch(error => {
    console.log('Error fetching data:',error)
   })
