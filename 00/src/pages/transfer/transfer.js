import { history, routes } from '../../core/router';
import { getAccountList } from '../account-list/account-list.api'
import { onUpdateField, onSetError } from '../../common/helpers';


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

console.log(transfer, 'transfer');
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

onUpdateField('select-account', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    account: value
    };

    formValidation.validateField('select-account', transfer.account).then(result => {
        onSetError('select-account', result);
    });

});
console.log(value, 'select');

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    iban: value
    };

    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    name: value
    };

    formValidation.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    amount: value
    };

    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    concept: value
    };

    formValidation.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
    });
});

