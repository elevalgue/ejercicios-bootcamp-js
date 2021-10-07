import { history, routes } from '../../core/router';
import { getAccountList } from '../account-list/account-list.api'


let transfer = {
    id: '',
    account: '',
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    date: "",
    email: ''
}

const params = history.getParams();

getAccountList(params.id).then(accountList => {
    setAccountOptions(accountList, params.id);

    if (!params.id) {
    transfer = {
        ...transfer,
        account: "1"
    };
        
    } else {
    const id = params.id - 1
    transfer = {
        ...transfer,
        account: accountList[id].id
    };
    }
})