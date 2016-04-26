import Mine from './mine.vue'
import { routes as SettingRoutes } from '../setting'

export const routes = Object.assign({
  '/mine': {
    name: 'mine',
    component: Mine
  }
}, SettingRoutes)
