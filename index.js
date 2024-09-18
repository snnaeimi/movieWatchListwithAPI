fetch("http://www.omdbapi.com/?i=tt3896198&apikey=75d5a10c")
  .then((response) => response.json())
  .then((data) => console.log(data));
