import {} from './movements.mappers'


let movemts = {
    accountId: '',
    alias: '',
    iban: '',
};
const params = history.getParams();
const isEditMode = Boolean(params.id);