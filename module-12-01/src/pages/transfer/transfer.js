import { history, routes } from '../../core/router';
import { getAccountList } from '../account-list/account-list.api'
import { sendTransfer } from './transfer.api';
import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors } from '../../common/helpers';
import { setAccountOptions } from './transfer.helpers/'
// import { formValidation } from '../account/account.validations';
import { formValidation } from './transfer.validations';

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

onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    notes: value
    };

    formValidation.validateField('notes', transfer.notes).then(result => {
        onSetError('notes', result);
    });
});

onUpdateField('day', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    day: value
    };

    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    });
});

onUpdateField('month', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    month: value
    };

    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    });
});

onUpdateField('year', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    year: value
    };

    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
    });
});

onUpdateField('email', event => {
    const value = event.target.value;
    transfer = {
    ...transfer,
    email: value
    };

    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    });
});

onSubmitForm('transfer-button', () => {
    console.log(transfer);

    formValidation.validateForm(transfer).then((result) => {
        onSetFormErrors(result);

        if (result.succeeded) {
            sendTransfer(transfer).then(() => {
                history.push(routes.accountList)
            })
        }
    })
})