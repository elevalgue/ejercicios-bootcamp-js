import { getAccount} from '../account/account.api';
import {getMovementsList} from './movements.api';
import { onSetValues } from "../../common/helpers";
import { addMovementRows } from './movements.helpers';
import { mapMovementApiToVm} from './movements.mappers';
import { history } from './../../core/router';

const params = history.getParams();

getAccount(params.id).then(account => {
  onSetValues(account);
});


getMovementsList().then(movement => {
  if (movement.accountId === params.id) {
    const vmMovements = mapMovementApiToVm(movement);
    addMovementRows(vmMovements);
  } else {
    const vmMovements = mapMovementApiToVm(movement).filter(movement => movement.accountId === params.id );
    addMovementRows(vmMovements);
  }
});