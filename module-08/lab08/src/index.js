const user = getUsers();

const nodes = [];

for (const user of users) {
    const node = getUserNode(user);
    node.push(node);
}

window.onload = function () {
    for (let node of nodes) {
        document.getElementById('root').append(node); 
    }
}