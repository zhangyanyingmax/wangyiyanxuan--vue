import axios from 'axios';

const loginAxios = axios.create({
  // baseURL:"",
  timeout:5000
});

//请求拦截器
loginAxios.interceptors.request.use((config) => {
  return config;
},(err) => {
  return Promise.reject(err)
});

//响应拦截器
loginAxios.interceptors.response.use((res) => {
  return res.data;
},(err) => {
  return Promise.reject(err);
});

export default loginAxios;
