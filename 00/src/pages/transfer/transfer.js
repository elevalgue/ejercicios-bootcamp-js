import { history, routes } from '../../core/router';

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
