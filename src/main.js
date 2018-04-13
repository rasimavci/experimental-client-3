import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store'
import 'mint-ui/lib/style.css'

import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import _glob from './components/methodCommon.vue'
import './assets/rasim-icons/rasim.css'
import { Navbar, TabItem } from 'mint-ui'

// Vue.component(Navbar.name, Navbar)
// Vue.component(TabItem.name, TabItem)

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.prototype.glob = _glob
let createMap = () => {
  const promise = new Promise(function (resolve, reject) {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      'https://webapi.amap.com/maps?v=1.3&key=1f648c12a2709a14b0e79551fdc5f791' // 高德地图
    document.body.appendChild(script)
    if (script.nodeName === 'SCRIPT') {
      resolve()
    } else {
      reject(new Error('Could not script image at ' + script.src))
    }
  })
  return promise
}
createMap()
  .then(function () {
    console.log('Read high German map success')
    // 加載當前的ip定位
  })
  .catch(function (error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('An error occurred！', error)
  })

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
