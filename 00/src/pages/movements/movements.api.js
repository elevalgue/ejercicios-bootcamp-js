import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

// export const getMovementsList = accountId =>
//     Axios.get(`${url}/${accountId}`).then(({ data }) => data);

export const getMovementsList = id => Axios.get(url, { params: { accountId: id } }).then(({ data }) => data); 