import axios from 'axios'

axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const BASE_URL = import.meta.env.VITE_DEV_BASE_URL

console.log('URL IS ', BASE_URL)
const post = (path, data) => {
    const new_url = `${BASE_URL}${path}`
    // const new_url = `${path}`;
    console.log(new_url)
    return axios.post(new_url, data || {})
}

/**
 *
 * @param {string} path
 * @returns {Observable<any>}
 */
const get = (path) => {
    const new_url = `${BASE_URL}${path}`
    return axios.get(new_url || {})
}

/**
 *
 * @param {string} path
 * @param data
 * @returns {Observable<any>}
 */
const put = (path, id, data) => {
    const new_url = `${BASE_URL}${path}/${id}`
    return axios.patch(new_url, data)
}

const single = (path, id) => {
    const new_url = `${BASE_URL}${path}/${id}`
    return axios.get(new_url)
}

/**
 *
 * @param path
 * @param data
 */
const deletes = (path, id) => {
    const new_url = `${BASE_URL}${path}/${id}`
    // const url = `${path}`;
    return axios.delete(new_url)
}

/**
 *
 * @param {string} path
 * @returns {Observable<any>}
 */
const getAll = (path) => {
    const new_url = `${BASE_URL}${path}`
    return axios.get(new_url)
}

/**
 *
 * @param {string} path
 * @returns {Observable<any>}
 */
const photo = (path) => {
    const new_url = `${PHOTO_URL}${path}`
    return new_url
}

const publish = (path, data) => {
    const new_url = `${BASE_URL}${path}`
    return axios.patch(new_url, data)
}

const RequestHandler = {
    post,
    get,
    getAll,
    publish,
    deletes,
    single,
    put,
    photo,
}
export default RequestHandler
