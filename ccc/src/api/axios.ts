import axios from "axios";
import { Toast } from 'vant';

axios.defaults.withCredentials = true;

let promise = axios.create({
  baseURL:'/server' 
});
promise.interceptors.request.use(function (config) {
  return config;
}, function (error) {});

promise.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return error
  }
);
export default new Proxy(async function(option){
  return promise(option);
},{
  apply:function(target,ctx,args){
    return Reflect.apply(target,ctx,args);
  }
});
