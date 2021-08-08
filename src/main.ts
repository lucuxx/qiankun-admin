import './public-path'
import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import routes from './router'
import store from './store'
import util from './util'
import axios from './axios'
import _ from 'lodash'
import Components from './components/index'
import * as jsCookie from 'js-cookie'
import moment from 'moment'

import VueRouter from 'vue-router'



Vue.config.productionTip = false

Vue.use(Element, { size: 'small' })
Vue.use(axios)
// 注册全局组件
Vue.use(Components)

Vue.prototype.$lo = _
Vue.prototype._ = _
Vue.prototype.$util = util
Vue.prototype.$moment = moment

// new Vue({
//     router,
//     store,
//     render: h => h(App),
// }).$mount('#app');

 // @ts-ignore
let instance = null

function render(props = {}) {
  // @ts-ignore
  const { container, routerBase } = props
  const router = new VueRouter({
    // @ts-ignore
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    // @ts-ignore
    routes,
  })
  const whiteList = ['/login', '/register']
  // @ts-ignore
  router.beforeEach((to, from, next) => {
  const userInfo = jsCookie.get('email')
  if (whiteList.indexOf(to.path) < 0) {
    if (userInfo) {
      next()
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next('/login')
      }
    }
  } else {
    next()
  }
})



  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  //   commonStore.globalRegister(store)
  // 模拟登录后，存储用户信息到global module
  //   const userInfo = { name: '我是独立运行时名字叫张三' } // 假设登录后取到的用户信息
  //   store.commit('global/setGlobalState', { user: userInfo })

  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

 // @ts-ignore
export async function mount(props) {
  console.log('[vue] props from main framework', props)

  // commonStore.globalRegister(store, props)

  render(props)
}

export async function unmount() {
   // @ts-ignore
  instance.$destroy()
   // @ts-ignore
  instance.$el.innerHTML = ''
  instance = null
}
