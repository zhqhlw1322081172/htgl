import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import lastcopy from '@/pages/lastcopy'
import charts from '@/pages/charts'
import element from '@/pages/element'
import responsive from '@/pages/responsive'
import tabs from '@/pages/tabs'
import forms from '@/pages/forms'
import drop from '@/pages/drop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/lastcopy',
      name: 'lastcopy',
      component: lastcopy
    },
    {
      path: '/charts',
      name: 'charts',
      component: charts
    },
    {
      path: '/element',
      name: 'element',
      component: element
    },
    {
      path: '/responsive',
      name: 'responsive',
      component: responsive
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs
    },
    {
      path: '/forms',
      name: 'forms',
      component: forms
    },
    {
      path: '/drop',
      name: 'drop',
      component: drop
    }
  ]
})
