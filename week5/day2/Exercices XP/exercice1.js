const ApiUrl = fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
   .then(response => {
    return response.json()
   })
   .then(data => {
    console.log(data)
   })
   .catch(error => {
    console.log(error)
   })
