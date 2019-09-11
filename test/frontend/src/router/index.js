import Vue from 'vue'
import Router from 'vue-router'
import RegisterEmail from '../components/Register/RegisterEmail'
import RegisterEmailCheck from '../components/Register/RegisterEmailCheck'
import RegisterPassword from '../components/Register/RegisterPassword'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/registeremail',
      name: 'RegisterEmail',
      component: RegisterEmail
    },
    {
      path: '/registeremailcheck',
      name: 'RegisterEmailCheck',
      component: RegisterEmailCheck
    },
    {
      path: '/registerpassword',
      name: 'RegisterPassword',
      component: RegisterPassword
    }
  ]
})
