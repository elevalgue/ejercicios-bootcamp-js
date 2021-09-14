function getAvatar(user) {
    const img = document.createElement('img');
    img.width = 150; 
    img.src = user.avatar_url;

    return img;
}

export { getAvatar }; 