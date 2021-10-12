export const dayValidator = ({ value }) => {
    const succeeded = parseInt(value) > 0 && parseInt(value) <= 31;
    return {
        succeeded,
    }
};

export const monthValidator = ({ value }) => {
    const succeeded = parseInt(value) > 0 && parseInt(value) <= 12;
    return {
        succeeded,
        type: '',
        message: succeeded ? '' : 'Mes inválido',
    }
};

export const yearValidator = ({ value }) => {
    const succeeded = parseInt(value) >= 2020;
    return {
        succeeded,
        type: '',
        message: succeeded ? '' : 'Año inválido',
    }
};
