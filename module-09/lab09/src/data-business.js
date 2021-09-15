const apiUrl =  "https://www.breakingbadapi.com/api";

function getCharacters() {
  return fetch(`${apiUrl}/characters`)
    .then(response => {
      return response.json()
    });
}

function getCharactersById(id) {
  return fetch(`${apiUrl}/characters/${id}`)
    .then(response => {
      return response.json()
    });
}



export { getCharacters, getCharactersById };