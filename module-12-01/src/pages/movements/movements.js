import { getAccount} from '../account/account.api';
import { getMovementsList } from './movements.api';
import { onSetValues } from "../../common/helpers";
import { addMovementRows } from './movements.helpers';
import { mapAccountApiToVm } from '../account/account.mappers';
import { mapMovementListApiToVm} from './movements.mappers';
import { history } from './../../core/router';

const params = history.getParams();

getMovementsList().then(movementList => {
    const viewModelMovementList = mapMovementListApiToVm(movementList, params.id);
    const totalBalance = viewModelMovementList.reduce((acc, item) => acc + parseInt(item.balance), 0);

    getAccount(params.id).then(apiAccount => {
        const account = mapAccountApiToVm(apiAccount);
        account.balance = totalBalance;
        onSetValues(account);
    });
    addMovementRows(viewModelMovementList);
});