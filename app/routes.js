import { routes as MineRoutes } from './pages/mine'
import { routes as HomeRoutes } from './pages/home'
import { routes as CartRoutes } from './pages/cart'

export default Object.assign(HomeRoutes,
                             MineRoutes,
                             CartRoutes)
