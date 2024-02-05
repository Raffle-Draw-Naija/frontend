import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(
    (config) => {
        // const loggedIn = token.isTokenLogged();
        const loggedIn =
            localStorage.getItem('_token') !== ''
                ? localStorage.getItem('_token')
                : ''
        if (loggedIn) {
            config.headers = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
            config.headers.Authorization = `Bearer ${loggedIn}`
        } else {
            console.log('There is no token yet...')
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
    },
    async (error) => {
        Promise.reject(error)
    }
)
const refreshToken = async (error, originalRequest) => {
    try {
        const rLoggedIn =
            localStorage.getItem('_rtoken') !== ''
                ? localStorage.getItem('_rtoken')
                : ''
        if (rLoggedIn) {
            const resp = axios.create()
            const response = await resp.get(
                'http://localhost:8001/api/v1/refresh-token',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            '_rtoken'
                        )}`,
                    },
                }
            )
            if (response) {
                localStorage.setItem('_token', response.data.token)
                error.config.headers.Authorization =
                    localStorage.getItem('_token')
                return axios(originalRequest)
            }
        } else {
            console.log('There is no token yet...')
        }
    } catch (e) {
        console.log('Error', e.response)
    }
}
axios.interceptors.response.use(
    function (response) {
        return response
    },
    (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            return refreshToken(error, originalRequest)
        }
        return Promise.reject(error)
    }
)
export default axios
