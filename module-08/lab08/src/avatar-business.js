(function (App) {
    App.getAvatar = function () {
        const img = document.createElement('img');
        img.src = user.avatar;

        return img;
    }
})(window.App || (window.App = {}));


// function getAvatar(user) {
//     const img = document.createElement('img');
//     img.src = user.avatar;

//     return img;
// }