import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter()

router.map(routes)

router.beforeEach( ({ to, next }) => {
  return new Promise( resolve => {
    resolve(true)
    to
    next
  })
})


router.afterEach( ({ to }) => {
  let title = to.title

  if (title)
    document.title = to.title
})

export default router
