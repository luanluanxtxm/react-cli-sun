import axios from "axios";
import getHeader from "./header";
import { message } from "antd";

const service = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers = getHeader(config.headers);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    if (response.config.responseType === "blob") {
      if (response.status === 200) {
        return response;
      } else {
        return Promise.reject(response);
      }
    } else {
      if (response.status === 200) {
        return response.data;
      } else {
        message.error(response.data.message);
        return Promise.reject(response.data);
      }
    }
  },
  function (error) {
    // 对响应错误做点什么
    console.log(error);
    message.error(error.response?.data?.message || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

export default service;
