import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsList = () => Axios.get(url).then(response => {
  return response.data;
});