import axios from 'axios'; 

function getUsers() {
  return axios
    .get('https://api.github.com/orgs/lemoncode/members')
    .then(response => {
      return response.data;
    });
}

export { getUsers }; 