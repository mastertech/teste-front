import axios from 'axios'

const api = axios.create({
    baseURL: "http://jrwee.mocklab.io"
})

api.interceptors.request.use((config) => {

    const storeUser = localStorage.getItem('loggedInUser')
    const loggedInUser = JSON.stringify(storeUser || '""')

    if(loggedInUser.token) {
        config.headers = {
            Authorization: `Bearer ${loggedInUser.token}`
        }
    }

    return config
})


export default api