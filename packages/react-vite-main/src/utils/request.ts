import axios from 'axios'
import storage from './storage'
import profix from '@/services/domain'
console.log(
    'import.meta.env.VITE_APP', import.meta.env.VITE_APP
)
const APP_ENV: any = import.meta.env.VITE_APP.toLocaleUpperCase()
const NODE_ENV: any = import.meta.env.DEV ? 'DEV' : 'PROD'
const damain = `${APP_ENV}_${NODE_ENV}`
const baseURL = profix[damain as keyof  typeof profix]
import {message} from 'antd'
const request = axios.create({
    timeout: 6000,
    baseURL,
    withCredentials: true, //允许携带cookie
})
// 请求拦截器
request.interceptors.request.use((config) => {
    const token = storage.getToken
    config.headers.token = token //统一注入token
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 获取接口返回结果
    const res = response.data;
    if (res?.code === '233' || res?.code === '235' || res?.code === '234') {
      message.warning(res.msg);
      localStorage.setItem('token', ''); //清空token跳转登录页
      window.location.href = `${baseURL}/login` //跳转登录页
      return;
    }
    if (res?.code !== '0000') {
      message.warning(res.msg);
    }
    return res;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default request