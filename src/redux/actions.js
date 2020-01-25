import axios from 'axios';
import { ACTION_TYPE } from './constants';

const accestTokken = '40911f29cc71fb7f857219bd23b30ed8';

const myApi = axios.create({
  baseURL: 'http://someUrl/',
  timeout: 10000,
  withCredentials: true,
  transformRequest: [data => JSON.stringify(data.data)],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getSongByHumming = async file => {
  console.log(file);
  myApi
    .post(
      `https://api.audd.io/recognizeWithOffset/?api_token=${accestTokken}`,
      {
        headers: {
          accept: 'multipart/form-data',
          'accept-language': 'en_US',
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: { file },
      },
      {
        'Content-Type': 'multipart/form-data',
        method: 'POST',
        'Access-Control-Allow-Methods': ' POST, GET, OPTIONS',
        ' Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
      }
    )
    .then(response => console.log(response))
    .catch(err => console.log(err));
};
export const getSongByLyrics = async searchString => {
  axios
    .get(`https://api.audd.io/findLyrics/?api_token=${accestTokken}&q=${searchString}`)
    .then(response => console.log(response))
    .catch(err => console.log(err));
};
