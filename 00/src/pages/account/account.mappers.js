const mapAccountFromApiToViewModel = account => {
    return {
        id: account.id,
        type: account.type,
        alias: account.alias,
    };
}; 