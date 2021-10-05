// export const mapMovementsListApiToVm = movementList => {
//     return movementList.map(movement => mapMovementsApiToVm(movement))
// };

export const mapMovementsListApiToVm = movementList =>
    Array.isArray(movementList)
        ? movementList.map(movement => mapMovementsApiToVm(movement)) : []; 

const mapMovementsApiToVm = movement => ({
    id: movement.id,
    description: movement.description,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
})

export const mapAccounApiToVm = account => {
    return {
        balance: `${account.balance} €`,
        alias: account.name,
        iban: account.iban,
    };
};