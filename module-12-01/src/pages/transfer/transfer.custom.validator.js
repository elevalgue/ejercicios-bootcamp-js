export const dayValidator = ({ value }) => {
    const succeeded = parseInt(value) < 1 && parseInt(value) <= 31;
    return {
        succeeded,
    }
}