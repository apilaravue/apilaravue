import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'
import VueSocketio from 'vue-socket.io';
import Auth from './packages/auth/Auth.js'
/*
  document from: http://vee-validate.logaretm.com/
*/
import VeeValidate from 'vee-validate'
import _connection from './packages/config/backendConnection.js'
import _constants from './packages/config/constants.js'

Vue.use(VueResource)
Vue.use(VueSocketio, 'http://localhost:8421')
Vue.use(Auth)
Vue.use(VeeValidate)
Vue.use(_connection)
Vue.use(_constants)

Vue.http.options.root = Vue._connection.domain
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
Vue.http.headers.common['Accept'] = 'application/json'

Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (response.status === 401) {
      console.log('Need to login again')
    }
  })
})

Router.beforeEach(
  (to, from, next) => {
    document.title = to.meta.title
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/home'
        })
      } else next()
    } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
          next({
            path: '/login'
          })
      } else next()
    } else if (to.matched.some(record => record.meta.logout)) {
      if (Vue.auth.isAuthenticated()) {
        Vue.auth.destroyToken()
          next({
            path: '/'
          })
      } else next()
    } else next()
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
