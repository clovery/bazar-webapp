import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(Vuex)

let globalMixin = {
  data() {
    return {
      DEBUG: true
    }
  }
}

Vue.mixin(globalMixin)

import stickTo from 'directives/stick-to'
Vue.directive('stick-to', stickTo)

import globalBar from 'components/global-bar'
Vue.component('global-bar', globalBar)
