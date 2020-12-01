import axios from 'axios'
require('dotenv').config()

const baseURL = process.env.REACT_APP_BACKEND_URL

const get = (path, options) => axios.get('${baseURL}${path}', options);

const post = (path, options, headers) => axios.post('${baseURL}${path}', options, headers);

const patch = (path, options, headers) => axios.patch('${baseURL}${path}', options, headers);

