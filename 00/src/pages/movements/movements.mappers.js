// export const mapMovementsListApiToVm = movementList => {
//     return movementList.map(movement => mapMovementsApiToVm(movement))
// };

export const mapMovementsListApiToVm = movementList =>
    Array.isArray(movementList)
        ? movementList.map(movement => mapMovementsApiToVm(movement)) : []; 

const mapMovementsApiToVm = movement => ({
    accountId: movement. accountId,
    description: movement.description,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
})
