export const mapMovementsListApiToVm = movementList => {
    return movementList.map(movement => mapMovementsApiToVm(movement))
};

const mapMovementsApiToVm = movementList => ({
    id: movementList.id,
    description: movementList.description,
    amount: `${movementList.amount} €`,
    balance: `${movementList.balance} €`,
    transaction: new Date(movementList.transaction).toLocaleDateString(),
    realTransaction: new Date(movementList.realTransaction).toLocaleDateString(),
})

export const mapAccounApiToVm = account => {
    return {
        balance: `${account.balance} €`,
        alias: account.name,
        iban: account.iban,
    };
};