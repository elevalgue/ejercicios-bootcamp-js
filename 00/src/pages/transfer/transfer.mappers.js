export const mapTransferFromViewModelToApi = transfer => {
    return {
    id: transfer.id,
    account: transfer.account,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    concept: transfer.concept,
    notes: transfer.notes,
    date: transfer.day + '-' + transfer.month + '-' + transfer.year,
    email: transfer.email,
    }
}
