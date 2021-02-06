import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'
import App from './App.vue'
// mock开关
const mock = true
if (mock) {
  require('./mock/api')
}
// 根据前端的跨域做调整
axios.defaults.baseURL = '/api'
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 超时返回
axios.defaults.timeout = 8000
// 接口错误拦截器
axios.interceptors.response.use(function(response) {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    // 未登录 10 重定向
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
