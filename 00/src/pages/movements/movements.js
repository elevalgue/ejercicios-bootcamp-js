import { getAccount, getAllMovements } from '../account/account.api';
import { history } from './../../core/router';
import { onSetValues } from "../../common/helpers";
import { mapMovementsApiToVm, mapMovementsListApiToVm } from './movements.mappers';

const params = history.getParams();
const isAccountId = Boolean(params.id);
console.log(isAccountId);

if (isAccountId) {
    getAccount(params.id).then(apiAccount => {
        console.log(apiAccount, 'apiAccount');
        console.log(params.id);
        account = mapMovementsApiToVm(apiAccount);
        onSetValues(account);
        // return getMovements(account.id);
    });
}