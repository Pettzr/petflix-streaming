import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    withCredentials: true,
})

const httpService = {
    get: (url, config = {}) => axiosInstance.get(url, config),
    post: (url, data, config = {}) => axiosInstance.post(url, data, config),
    put: (url, data, config = {}) => axiosInstance.put(url, data, config),
    patch: (url, data, config = {}) => axiosInstance.patch(url, data, config),
    delete: (url, config = {}) => axiosInstance.delete(url, config),
}

export default httpService;
