import { getAccount} from '../account/account.api';
import { getMovementsList } from '../movements/movements.api';
import { onSetValues } from "../../common/helpers";
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm} from './movements.mappers';
// import { mapAccountApiToVm} from '..account/account.mappers';
import { history } from './../../core/router';

const params = history.getParams();

// if (params.id) {
getAccount(params.id).then(apiAccount => {
        // const account = mapAccountApiToVm(apiAccount);
        onSetValues(apiAccount);
});

getMovementsList().then(account => {
const apiAccount = mapMovementsListApiToVm(account);
onSetValues(apiAccount)
});
// }

// getMovementsList().then(movement => {
// getMovementsList().then(movement => {
//         const vmMovement = mapMovementsListApiToVm(movement, params.id);
//         addMovementRows(vmMovement);
// });

getAccountList().then(accountList => {
    const vmAccountList = mapAccountListApiToVm(accountList);
    addMovementRows(vmAccountList);
    setEvents(vmAccountList);
});