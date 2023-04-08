import axios from 'axios';

const service = axios.create({
    
    baseURL: 'http://localhost:3000/api/v1', 
    timeout: 5000000
});

service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('ms_token');
        if (token) {
            // 让每个请求携带token
            // ['X-Token']是一个自定义头密钥
            // 请根据实际情况修改
            // config.headers['X-Token'] = getToken()
            config.headers.Authorization = 'Bearer ' + token
          }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);


service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
