function getUsers() {
  return fetch('https://api.github.com/orgs/lemoncode/members')
    .then(response => {
      return response.json();
    }
  );
}

export { getUsers }; 