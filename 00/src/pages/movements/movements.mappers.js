export const mapMovementsListApiToVm = movementList => {
    return movementList.map(movement =>
        mapMovementsApiToVm(movement))
};

const mapMovementsApiToVm = movement => ({
    id: movement.id,
    description: movement.description,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
})