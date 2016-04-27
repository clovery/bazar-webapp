import 'whatwg-fetch'

class User {
  constructor() {
    this.url = '/user'
  }

  /* get */
  find() {
    return new Promise( () => {
      fetch(this.url)
    })
  }

  /* post */
  create() {

  }

  /* update */
  update() {

  }

  /* delete */
  destroy() {

  }
}

export default new User
