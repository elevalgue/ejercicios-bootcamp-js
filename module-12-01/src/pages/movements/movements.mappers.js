export const mapMovementListApiToVm = movementList =>
    Array.isArray(movementList)
        ? movementList.map(movement => mapMovementApiToVm(movement)) : [];
        

// export const mapMovementListApiToVm = (movementList, id) => {
//     return movementList.map(movement => mapMovementApiToVm(movement)).filter(mov => mov.accountId === id);
// }

const mapMovementApiToVm = movementList => {
    return {
        id: movementList.id,
        iban: movementList.iban,
        alias: movementList.name,
        description: movementList.description,
        realTransaction: new Date(movementList.realTransaction).toLocaleDateString(),
        transaction: new Date(movementList.transaction).toLocaleDateString(),
        balance: `${movementList.balance} €`,
        amount: `${movementList.amount} €`,
        accountId: movementList.accountId
    }
}