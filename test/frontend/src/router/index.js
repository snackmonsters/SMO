import Vue from 'vue'
import Router from 'vue-router'
import RegisterEmail from '../components/Register/RegisterEmail'
import RegisterEmailCheck from '../components/Register/RegisterEmailCheck'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/registeremail',
      name: 'RegisterEmail',
      component: RegisterEmail
    },
    {
      path: '/registeremailcheck',
      name: 'RegisterEmailCheck',
      component: RegisterEmailCheck
    }
  ]
})
