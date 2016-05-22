/**
 * class TinyTracker
 */
class TinyTracker {
  constructor ({ url } = { url: 'http://127.0.0.1:3000' }) {
    this.url = url
    this.stack = []
    this.rewrite()
  }

  /**
   * rewrite window.oerror
   */
  rewrite () {
    window.onerror = (message, filename, lineno, columno, error) => {
      this.stack.push({
        m: message,
        f: filename,
        l: lineno,
        c: columno,
        e: error
      })

      this.report()
    }
  }

  report () {
    let img = new Image()
    let error = this.stack.pop()
    let query = []

    Object.keys(error).forEach(key => {
      query.push(`${key}=${error[key]}`)
    })

    img.src = this.url + '?' + query.join('&')
  }
}

export default function () {
  return new TinyTracker
}
