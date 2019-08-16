import axios, { AxiosRequestConfig } from 'axios';
import * as App from './components/App';
import Product from './components/ProductInfo/ProductInfo';
import config from './config/config';

const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  },
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
};


axios.get(`${config.apiUriLocal}products`, axiosConfig)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error.response);
  })
  .finally(() => {

  })
document.getElementById('root').innerHTML = Product();
