import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors,} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';

let login = {
    user: '',
    password: '',
};

onUpdateField('user', event => {
    const value = event.target.value;
    login = {
        ...login,
        user: value,
    };

    formValidation.validateField('user', login.user).then(result => {
    onSetError('user', result);
    });
});

onUpdateField('password', event => {
    const value = event.target.value;
    login = {
        ...login,
        password: value
    };

    formValidation.validateField('password', login.password).then(result => {
    onSetError('password', result);
    });

});

onSubmitForm('login-button', () => {
    console.log({ login });
    isValidLogin(login).then(isValid => {
    console.log({ isValid });
    });
});