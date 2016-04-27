import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { register } from 'utils/vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

Vue.use(Vuex)

/*
register('directive', [
  'stick-to'
])
*/

register('component', [
  'global-bar'
], './common')
