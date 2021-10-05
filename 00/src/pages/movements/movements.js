import { getAccount} from '../account/account.api';
import { getMovementsList } from '../movements/movements.api';
import { onSetValues } from "../../common/helpers";
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm} from './movements.mappers';
// import { mapAccountApiToVm} from '..account/account.mappers';
import { history } from './../../core/router';

let account = {
  id: '',
  type: '',
  alias: '',
};
const params = history.getParams();

getAccount(params.id).then(apiAccount => {
        // const account = mapAccountApiToVm(apiAccount);
        onSetValues(apiAccount);
});

getMovementsList(params.id).then(account => {
const apiAccount = mapMovementsListApiToVm(account);
onSetValues(apiAccount)
});
// }


// getAccountList().then(accountList => {
//     const vmAccountList = mapAccountListApiToVm(accountList);
//     addMovementRows(vmAccountList);
//     setEvents(vmAccountList);
// });