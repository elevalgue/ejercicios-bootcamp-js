import * as UserBusiness from './user-business';
import * as DataBusiness from './data-business';

DataBusiness.getUsers().then(users => {
    document.getElementById('root').innerHTML = '';
    
    const nodes = [];
    
    for (let user of users) {
        const node = UserBusiness.getUserNode(user);
        nodes.push(node);
    }
    
    for (let node of nodes) {
        document.getElementById('root').append(node);
    }
});
