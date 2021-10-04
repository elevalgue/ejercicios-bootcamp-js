export const mapMovementsVmToApi = movements => {
    return movements.map(account =>
        mapMovementsVmToApi(account))
};

const mapMovementsVmToApi = movements => ({
    id: movements.id,
    description: movements.description,
    amount: `${movements.amount} €`,
    balance: `${movements.balance} €`,
    transaction: new Date(movements.transaction).toLocaleDateString(),
    realTransaction: new Date(movements.realTransaction).toLocaleDateString(),

})

/*
  "movements": [
    {
      "id": "1",
      "description": "Nómina noviembre",
      "amount": 900,
      "balance": 1490,
      "transaction": "2019-12-09T21:30:00",
      "realTransaction": "2019-12-09T21:30:00",
      "accountId": "1"
    },
*/