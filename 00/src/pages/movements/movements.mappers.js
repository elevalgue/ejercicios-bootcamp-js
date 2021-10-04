export const mapMovementsVmToApi = movements => {
    return movements.map(account =>
        mapMovementsApiToVm(account))
};

const mapMovementsApiToVm = movements => ({
    id: movements.id,
    description: movements.description,
    amount: `${movements.amount} €`,
    balance: `${movements.balance} €`,
    transaction: new Date(movements.transaction).toLocaleDateString(),
    realTransaction: new Date(movements.realTransaction).toLocaleDateString(),

})