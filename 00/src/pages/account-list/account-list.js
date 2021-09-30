import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListApiToVm } from './account-list.mappers';

getAccountList().then(accountList => {
    const vmAccountList = mapAccountListApiToVm(accountList);
    addAccountRows(vmAccountList);
});

