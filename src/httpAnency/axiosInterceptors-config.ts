/**
 * Created by f on 2018/4/27.
 */
import axios, {AxiosRequestConfig} from 'axios'
import apiconfig from '../api-config'
import store  from '../store'
import {async} from "rxjs/scheduler/async";
let ax = axios.create();

ax.interceptors.request.use(async (config) => {
    // config.baseURL = apiconfig.baseURL;
    config.headers = config.headers || {};
    config.headers["Content-Type"] = "application/json ; charset=utf-8;";
    await addTokenToHeader(config).then((data: any) => {
        config.headers["Access-Token"] = data;
    })
    config.timeout = apiconfig.timeout;
    config.method = "post";
    return config;
});

ax.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})

function addTokenToHeader(config: any) {
    return new Promise((resolve, reject) => {
       // resolve(store().getters.getAccessToken());
        resolve("sdjkjsjdkfjkdfhs");
    })
}


export default ax;
