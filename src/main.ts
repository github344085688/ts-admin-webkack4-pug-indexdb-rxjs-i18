import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import vueRouter from 'vue-router'
import createRouter from './router'
import createStore from './store'
import {i18n,config} from './i18OrLanguage/I18nConfig'
import VeeValidate from 'vee-validate'
import setFontSize from './typings/defaultFontSize'
import RXeEvent from './directive/rx-event'
import Plugins from './plugins/plugins'
Vue.use(Vuex);
Vue.use(vueRouter);
Vue.use(RXeEvent);
Vue.use(Plugins);
Vue.use(VeeValidate, config);
Vue.use(setFontSize);
const router = createRouter();
const store = createStore();
sync(store, router);
/*
router.beforeEach((to:any, from:any, next:any) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})
router.beforeResolve((to:any, from:any, next:any) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to:any, from:any) => {
  console.log('after each invoked')
})*/
Vue.config.productionTip = false;
const app: Vue = new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: {App },
  template: '<app/>'
})
export default app