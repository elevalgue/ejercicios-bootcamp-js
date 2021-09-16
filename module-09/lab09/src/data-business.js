const apiUrl =  "https://www.breakingbadapi.com/api";

function getCharacters() {
  return fetch(`${apiUrl}/characters`)
    .then(response => response.json());
}

function getCharactersById(id) {
  return fetch(`${apiUrl}/characters/${id}`)
    .then(response => response.json());
}

// export { getCharacters };
export { getCharacters, getCharactersById };