function getAvatar(user) {
    const img = document.createElement('img');
    img.src = user.avatar;

    return img;
}