import axios from 'axios'
require('dotenv').config()

const baseURL = process.env.REACT_APP_BACKEND_URL

const get = (path, options) => axios.get(`${baseURL}${path}`, options);

const post = (path, options, headers) => axios.post(`${baseURL}${path}`, options, headers);

const put = (path, options, headers) => axios.put(`${baseURL}${path}`, options, headers);

const delete_ = (path, options) => axios.delete_(`${baseURL}${path}`, options);

export default {
    get,
    post,
    put,
    delete_,
};