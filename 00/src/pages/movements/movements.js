import { getAccount} from '../account/account.api';
import { getMovementsList } from '../movements/movements.api';
import { onSetValues } from "../../common/helpers";
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm} from './movements.mappers';
// import { mapAccountApiToVm} from '..account/account.mappers';
import { history } from './../../core/router';

const params = history.getParams();

getAccount(params.id).then(apiAccount => {
        onSetValues(apiAccount);
});

getMovementsList().then(movement => {
        if (movement.accountId === params.id) {
                const vmMovementsList = mapMovementsListApiToVm(movement);
                addMovementRows(vmMovementsList)
        } else {
                const vmMovementsList = mapMovementsListApiToVm(movement).filter(movement.accountId === params.id);
                addMovementRows(vmMovementsList)       
        }
        
});
