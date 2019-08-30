// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#EC407A',
    secondary: '#181818',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
