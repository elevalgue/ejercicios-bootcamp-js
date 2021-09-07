const users = getUsers();

const nodes = [];

for (let user of users) {
    const node = getUserNode(user);
    nodes.push(node);
}

window.onload = function () {
    for (let node of nodes) {
        document.getElementById('root').append(node); 
    }
}