import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/all.css'
import { compareTime , switchTime } from '@/utils/day'


Vue.prototype.$compareTime = compareTime
Vue.prototype.$switchTime = switchTime
Vue.use(ElementUI);
Vue.config.productionTip = false


// console.log("打印VUE")
// console.dir(Vue)
// console.log("打印VUE原型对象")
// console.log(Vue.prototype)

const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')




// console.log("打印vm对象")
// console.log(vm)
// console.log("通过vm打印原型对象")
// console.log(vm.__proto__)
