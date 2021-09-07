(function (App) {
    App.getAvatar = function(user) {
        const img = document.createElement('img');
        img.src = user.avatar;

        return img;
    }
})(window.App || (window.App = {}));