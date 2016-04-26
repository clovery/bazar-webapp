import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

Vue.use(Vuex)

import stickTo from 'directives/stick-to'
Vue.directive('stick-to', stickTo)

import globalBar from 'components/global-bar'
Vue.component('global-bar', globalBar)
