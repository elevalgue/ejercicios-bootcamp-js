import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListApiToVm } from './account-list.mappers';

getAccountList().then(accountList => {
    addAccountRows(accountList);
    const vmAccountList = mapAccountListApiToVm(accountList);
    addAccountRows(vmAccountList);
});

