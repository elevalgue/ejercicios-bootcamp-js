import axios from 'axios'; 

function getUsers() {
  return axios
    .get('https://api.github.com/orgs/lemoncode/members')
    .then(response => {
      const myPromise = new Promise(resolve => {
        setTimeout(function() {
          resolve(response.data);
        }, 2000)
      })
      return myPromise; 
    });
}

export { getUsers }; 