import 'whatwg-fetch'
import processResponse from 'utils/process-response'

const log = require('utils/log')('xhr')

/**
 * 默认请求头
 */
const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

/**
 * @params url String
 */
export function get(url) {
  log.log(`get ${url}`)

  return new Promise( (resolve) => {
    return fetch(url, {
      method: 'GET',
      headers: Object.assign(defaultHeaders),
    })
      .then(processResponse)
      .then( body => {
        resolve(body)
      })
  })
}

/**
 *
 */
export function post(url, data) {
  log.log(`post ${url}`)

  return new Promise( (resolve) => {
    return fetch(url, {
      method: 'POST',
      headers: Object.assign(defaultHeaders),
      body: JSON.stringify(data)
    })
    .then(processResponse)
    .then( body => {
      resolve(body)
    })
  })
}
