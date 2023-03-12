import Axios from 'axios';

const urlAccountList = `${process.env.BASE_API_URL}/account-list`;

const url = `${process.env.BASE_API_URL}/transfer`;



export const getAccountList = () =>
  Axios.get(urlAccountList).then(response => {
    return response.data;
  });


export const insertTransfer = (transfer) => Axios.post(url + '/' + transfer.id, transfer).then(response => {
  return response.data;
})

