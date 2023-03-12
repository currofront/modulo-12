import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getAccount = id =>
  Axios.get(`${url}/${id}`).then(response => {
    return response.data;
  });

export const getMovementList = () => Axios.get(url).then(response => {
  return response.data;
});

