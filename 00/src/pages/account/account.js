import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { formValidation } from './account.validations';

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

    formValidation.validateField('type', account.type).then(result => {
    onSetError('type', result);  
    });

});

onUpdateField('alias', (event) => {
    const value = event.target.value;
    account = {
        ...account,
        alias: value, 
    }

    formValidation.validateField('alias', account.alias).then(result => {
    onSetError('alias', result);  
    });

})

onSubmitForm('save-button', () => {
    formValidation.validateForm(account).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            console.log(account);
        }
    })
})