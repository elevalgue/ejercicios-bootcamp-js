const apiUrl =  "https://www.breakingbadapi.com/api";

function getCharacters() {
  return fetch(`${apiUrl}/characters`)
    .then(response => response.json());
}

export { getCharacters };