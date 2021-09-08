const avatarBusiness = require("./avatar-business");

function getFullName(user) {
  return user.first_name + " " + user.last_name;
}

function getUserNode(user) {
  const node = document.createElement("div");
  node.appendChild(avatarBusiness.getAvatar(user));
  node.append(getFullName(user) + " " + user.email);

  return node;
}

module.exports = { getFullName, getUserNode };
