import axios from 'axios';

const apiUrl = "http://127.0.0.1:8000/api/";
const authTokenKey = "auth_token";

const api = axios.create({ baseURL: apiUrl});

const apiForm = axios.create({ baseURL: apiUrl});

try {
  api.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem(authTokenKey),
  };
  
  apiForm.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type':'multipart/form-data',
    'Authorization': 'Bearer ' + localStorage.getItem(authTokenKey),
  };
} catch (error) {}

export {api, apiForm};