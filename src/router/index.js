import Vue from 'vue'
import Router from 'vue-router'

import Maps from '../views/Maps.vue'
import About from '../views/About.vue'
import Weather from '../views/Weather.vue'

Vue.use(Router)


export default new Router({
  routes : [
    {
      path: '/maps',
      component : Maps
    },
    {
      path: '/about',
      component : About
    },
    {
      path: '/',
      component : Weather
    },
  ]
})