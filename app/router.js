import VueRouter from 'vue-router'

const router = new VueRouter()

import { routes as MineRoutes } from './pages/mine'
import { routes as HomeRoutes } from './pages/home'
import { routes as CartRoutes } from './pages/cart'

router.beforeEach( ({ to, next }) => {
  return new Promise( resolve => {
    resolve(true)
    to
    next
  })
})

router.map(Object.assign(HomeRoutes, MineRoutes, CartRoutes))

export default router
