// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Scroller from 'vue-scroller-loading'

import App from './App'
import './css/style.css'
import './css/common.css'
import './css/list.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Scroller)

import Index from './views/Index.vue' // eslint-disable-line
import RefreshAndInfinite from './views/RefreshAndInfinite.vue' // eslint-disable-line
import LoadMoreAndNoData from './views/LoadMoreAndNoData.vue' // eslint-disable-line
import CustomSpinner from './views/CustomSpinner.vue' // eslint-disable-line

const routes = [
  { path: '/', component: Index },
  { path: '/refreshAndInfinite', component: RefreshAndInfinite },
  { path: '/loadMoreAndNoData', component: LoadMoreAndNoData },
  { path: '/customSpinner', component: CustomSpinner }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
