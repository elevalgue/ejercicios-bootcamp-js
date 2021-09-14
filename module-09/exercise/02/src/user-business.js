const AvatarBusiness = require('./avatar-business'); 

function getFullName(user) {
    return user.login; 
}

function getUserNode(user) {
    const node = document.createElement('div');
    node.appendChild(AvatarBusiness.getAvatar(user));

    return node; 
}

export { getFullName, getUserNode }; 