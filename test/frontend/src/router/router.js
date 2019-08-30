import Vue from 'vue'
import Router from 'vue-router'
// import RegisterEmail from '../components/Register/RegisterEmail'
// import RegisterEmailCheck from '../components/Register/RegisterEmailCheck'
import HomePage from '../View/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    }

  ]
})
