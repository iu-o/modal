import Vue from 'vue'
import index from './index.vue'
import modalExample from '../lib'
Vue.use(modalExample)
Vue.config.productionTip = false

new Vue({
  render: h => h(index),
}).$mount('#app')
