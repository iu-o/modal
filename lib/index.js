import Vue from 'vue'
import modal from './modal.vue'
import './modal.scss'

const initModal = (options = {}) => {
  const ModalConstructor = Vue.extend(modal)
  const instance = new ModalConstructor({
    el: document.createElement('div'),
    propsData: options
  })
  document.body.appendChild(instance.$el)
  return instance
}

const alert = (options = {}) => {
  const instance = initModal(options)
  return new Promise(resolve => {
    instance.callBack = (options) => {
      instance.showModal = false
      resolve(options)
    }
    instance.showModal = true
  })
}

const confirm = (options = {}) => {
  options.modalType = 'confirm'
  const instance = initModal(options)
  return new Promise(resolve => {
    instance.callBack = (options) => {
      instance.showModal = false
      resolve(options)
    }
    instance.showModal = true
  })
}

const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  Vue.component('modal', modal)
  Vue.$alert = Vue.prototype.$alert = alert
  Vue.$confirm = Vue.prototype.$confirm = confirm
}

const plugin = {
  install,
}
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
