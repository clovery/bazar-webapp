import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import TinyTracker from './tiny-tracker'

Vue.use(VueRouter)

Vue.use(Vuex)

Vue.config.debug = process.env.NODE_ENV !== 'production'

TinyTracker()

register('component', ['global-bar'])

/*
 * 注册 component, directive, filter
 */
function register(type, modules) {
  modules.forEach( name  => {
    let module = require(`./common/${type}s/${name}/index.js`)
    Vue[type](name, module)
  })
}
