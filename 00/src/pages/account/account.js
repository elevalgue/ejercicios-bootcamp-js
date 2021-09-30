import { onUpdateField, onSubmitForm } from '../../common/helpers';

let account = {
    id: '',
    type: '',
    alias: '',
};

onUpdateField('type', (event) => {
    const value = event.target.value;
    account = {
        ...account,
        type: value,
    }; 
});

onUpdateField('alias', (event) => {
    const value = event.target.value;
    account = {
        ...account,
        alias: value, 
    }
})

onSubmitForm('save-button', () => {
    console.log(account);
})