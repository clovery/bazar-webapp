import Vue from 'vue'

export function register(type, modules, baseDir) {
  baseDir = baseDir || './common'

  modules.forEach( name  => {
    let module = require(`${baseDir}/${type}s/${name}/index.js`)
    Vue[type](name, module)
  })
}
