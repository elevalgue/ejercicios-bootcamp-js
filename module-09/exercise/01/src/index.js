import * as UserBusiness from './user-business';
import * as DataBusiness from './data-business';

// Estamos usando getUsers como una promesa
DataBusiness.getUsers()
    .then(data => {
        const users = data; 
        
        const nodes = [];
        
        for (let user of users) {
            const node = UserBusiness.getUserNode(user);
            nodes.push(node);
        }
        
        
        for (let node of nodes) {
            document.getElementById('root').append(node);
        }
    });
