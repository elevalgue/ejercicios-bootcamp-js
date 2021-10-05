import { getAccount} from '../account/account.api';
import {getMovementsList} from './movements.api';
import { onSetValues } from "../../common/helpers";
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm} from './movements.mappers';
import { history } from './../../core/router';

const params = history.getParams();

getAccount(params.id).then(account => {
        onSetValues(account);
});

// getMovementsList().then(movement => {
//         if (movement.accountId === params.id) {
//                 const vmMovementsList = mapMovementsApiToVm(movement);
//                 addMovementRows(vmMovementsList)
//         } else {
//                 const vmMovementsList = mapMovementsApiToVm(movement.accountId === params.id);
//                 addMovementRows(vmMovementsList)       
//         }

// });

getMovementsList().then(movement => {
  if (movement.accountId === params.id) {
//     const vmMovements = mapMovementsApiToVm(movement);
    addMovementRows(vmMovements);
  } else {
//     const vmMovements = mapMovementsApiToVm(movement).filter(movement => movement.accountId === params.id );
    addMovementRows(vmMovements);
  }
});