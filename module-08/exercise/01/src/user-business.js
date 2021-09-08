function getFullName(user) {
    return `${user.first_name} ${user.last_name}`;
}

function getUserNode(user) {
    const node = document.createElement('div');

    node.appendChild(getAvatar(user));
    node.append(`${getFullName(user)} ${user.email}`);

    return node; 
}