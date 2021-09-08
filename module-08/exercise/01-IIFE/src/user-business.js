(function(App) {
    App.getFullName = function(user) {
        return (`${user.first_name} ${user.last_name}`)
    };

    App.getUserNode = function(user) {
        
        const node = document.createElement('div');
        
        node.appendChild(App.getAvatar(user));
        node.append(`${App.getFullName(user)} ${user.email}`);

        return node; 
    }
})(window.App || (window.App = {}));
