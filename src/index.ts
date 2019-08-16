import axios, {AxiosRequestConfig} from 'axios';
import config from './config/config';

const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  },
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
};
const packages = {
  name: 'This is me',
  job: 'Developer',
  year_of_experiences: '3 years'
}

axios.get(`${config.apiUriLocal}products`,axiosConfig)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error.response);
  })
  .finally(() => {

  })
