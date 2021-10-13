export const mapAccountApiToVm = account => ({
    ...account,
    alias: account.name,
});

export const mapAccountVmToApi = account => ({
    ...account,
    name: account.alias,
});
